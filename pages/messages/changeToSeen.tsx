import React, { ReactElement, useState } from 'react';
import styles from '../../styles/Message.module.css'
import { Layout, PageHeadWithImage } from '../../components';
import { fetcher, isValidId } from '../../dir/functions';
import { useRouter } from 'next/router'


type response = {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
}

const ChangeToSeen = () => {
    const [apiResponse, setApiResponse] = useState<response>()
    const router = useRouter()

    const updateMessage = async () => {
        const el = document.getElementById(styles.status);
        el && el.classList.add(styles.active)
        const response = await fetcher(`/api/message?id=${router.query.id}`, 'PUT', { new: false })
        setApiResponse(response);
        setTimeout(() => { 
            setApiResponse(undefined)
            el && el.classList.remove(styles.active)
        }, 5000);
    }

    return (
        <div className="page">
            <div className="pageContainer">
                <PageHeadWithImage pageName={{ name: 'הודעות', link: 'message' }} />
                <div className={styles.container}>
                    <div className={styles.message}>
                        <div className={styles.changeToSeen}>
                            {router.query.id && isValidId(router.query.id) &&
                                <>

                                    <p id={styles.status}>
                                        <span> סטטוס הבקשה : </span>
                                        <span>{apiResponse ? `${'הסתיימה'}` : `${'ממתין...'}`}</span>
                                    </p>

                                    {apiResponse && <p>
                                        <span>תוצאה : </span>
                                        <span>{apiResponse?.success ? `${'הצלחה'}` : `${'כישלון'}`}</span>
                                    </p>}

                                    {apiResponse?.success && <p>
                                        <span>הודעה : </span>
                                        <span>{apiResponse?.message}</span>
                                    </p>}

                                    {apiResponse?.error && <p>
                                        <span>שגיאה : </span>
                                        <span>{apiResponse?.error}</span>
                                    </p>}

                                    <div className={styles.submit}>
                                        <button type='submit' className='submitBtn' onClick={() => updateMessage()}>
                                            <p>עדכון</p>
                                            <div className={`response ${apiResponse?.success
                                                ? 'success'
                                                : apiResponse?.error
                                                    ? 'failure'
                                                    : 'submit'
                                                }`} >
                                            </div>
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ChangeToSeen.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default ChangeToSeen;