import '../styles/globals.css'
import { AppPropsWithLayout } from '../dir/types'

console.log("\x1b[32mWelcome to Portfolio!")
console.log("\x1b[34mKeep your face to the sun and")
console.log("\x1b[34myou will never see the shadows.")
console.log("\x1b[32mHave a great day")
console.log("\x1b[32mMade with" + " " + "\x1b[31m❤ " + " " + "\x1b[32min" + " " + "\x1b[34mIsrael");
console.log("\x1b[32m© 2022 Siman tov Jamberu.");
console.log("\x1b[31mAll rights reserved.");
console.log("\x1b[34mhttps://github.com/jamberusimantov")
console.log("\x1b[34mhttps://www.linkedin.com/in/siman-tov-jamberu/");

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)
  return getLayout(<Component {...pageProps} />)
}
export default MyApp