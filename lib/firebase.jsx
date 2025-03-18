import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

{/* <div class="lb_parnter" id="web3">
    <div class="main hello7">
        <h2><span>Our</span> Partners <i class="fa-solid fa-globe fa-beat-fade" style="color: #ffffff;"></i></h2>
        <div class="lb_partner_wrap">
            <?php if (isset($run_partner) && $run_partner->num_rows > 0) { ?>
                <?php while ($final = $run_partner->fetch_assoc()) { ?>
                    <div class="lb_partner_wrap_inn">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h4><?php echo htmlspecialchars($final['name'] ?? 'Unknown Partner'); ?></h4>
                                    <img src="images/<?php echo htmlspecialchars($final['image'] ?? 'default.png'); ?>" alt="Add Logo">
                                    <a class="a_parnter a_gdid" href="javascript:void(0)">Get Demo ID</a>
                                </div>
                                <div class="flip-box-back">
                                    <h4>Demo ID</h4>
                                    <ul>
                                        <li>
                                            Username - <span class="copy_text"><?php echo htmlspecialchars($final['username'] ?? 'N/A'); ?></span>
                                            <img class="copy_img" alt="Copy Username" src="images/images-copy.png" onclick="copyToClipboard(this)">
                                        </li>
                                        <li>
                                            Password - <span class="copy_text"><?php echo htmlspecialchars($final['password'] ?? ''); ?></span>
                                            <img class="copy_img" alt="Copy Password" src="images/images-copy.png" onclick="copyToClipboard(this)">
                                        </li>
                                    </ul>
                                    <a class="a_parnter" target="_blank" href="<?php echo htmlspecialchars($final['visit_website'] ?? '#'); ?>">
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>
        <img class="lb_partner_card anim" src="images/images-cardbig.png" alt="">
    </div>
</div>

<script>
function copyToClipboard(element) {
    let text = element.previousElementSibling.innerText; // ক্লিক করা ইমেজের আগের span থেকে টেক্সট নেওয়া
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
</script> */}