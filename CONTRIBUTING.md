## Languages
*Read this in other languages: [Bahasa](#bahasa), [English](#english).*

[comment]: <> (AWAL DARI BAHASA SECTION)

<div align=center>
<h1 id="bahasa">Berkontribusi pada motionime</h1>
</div>


Selamat datang di project motionime! Kami menghargai minat Anda untuk berkontribusi pada proyek sumber terbuka kami. Kontribusi Anda membantu kami memperbaiki dan meningkatkan proyek untuk semua pengguna. Berikut adalah beberapa panduan untuk memulai:

## Aturan Kontribusi📚:
Sebelum Anda mulai berkontribusi, harap baca dan patuhi **[Kode Etik](CODE_OF_CONDUCT.md)** kami. Kami mengharapkan semua kontributor untuk mengikuti panduan ini untuk memastikan lingkungan yang ramah dan inklusif. Pedoman untuk menghindari hal-hal yang tidak diinginkan:
- Anda diperbolehkan membuat lebih dari satu pull request.
- JANGAN menghapus konten lain.
- Gaya/kode bisa cantik, jelek, atau bodoh, besar atau kecil selama berfungsi 😉
- Pastikan Anda membuat branch terpisah sebelum membuka PR.
- Buat pull request Anda ringkas dan terfokus pada satu isu atau fitur untuk meminimalkan konflik merge.
- Pastikan komponen Anda didokumentasikan dengan baik dan mengikuti praktik terbaik.
- Gunakan nama yang bermakna untuk komponen Anda dan jaga basis kode tetap bersih dan terorganisir.
- Tulis pesan commit yang jelas dan informatif.
- Bersikaplah baik dan hormat kepada kontributor lain.
- Bersedia menerima feedback dan terlibat dalam diskusi untuk meningkatkan kontribusi Anda.

## Persiapan🤩🤗:
Untuk berkontribusi pada proyek motionime, ikuti langkah-langkah ini:

- Fork repositori ini (Klik tombol "Fork" di kanan atas repositori ini untuk membuat salinan Anda sendiri)

- Clone repositori yang sudah di-fork:
```bash
git clone https://github.com/{nama-pengguna-github-anda}/motionime.git
```
- Arahkan ke direktori proyek:
```bash
cd motionime
```
- Instal dependensi:
```bash
npm install
```
- Buat branch baru untuk kontribusi Anda. Beri nama sesuai untuk menjelaskan pekerjaan yang Anda lakukan:
```bash
git checkout -b fitur/fitur-baru
```
- Lakukan perubahan Anda dan commit, tulis kode, perbaiki bug, atau tambahkan fitur baru. Commit perubahan Anda dengan pesan commit yang jelas dan deskriptif:
```bash
git commit -m "Menambahkan Fitur Baru"
```
- Push perubahan Anda ke fork Anda:
```bash
git push origin fitur/fitur-baru
```
- Buat pull request: Kunjungi repositori motionime asli di GitHub dan klik tombol "New Pull Request". Berikan deskripsi rinci tentang perubahan Anda di pull request, dan tim kami akan meninjau kontribusi Anda.

## Menghindari Konflik {Sinkronisasi fork Anda}
Cara mudah untuk menghindari konflik adalah dengan menambahkan 'upstream' untuk repo git Anda, karena PR lain mungkin sudah digabungkan saat Anda bekerja pada branch/fork Anda.
```bash
git remote add upstream https://github.com/motionime/motionime.git
```

Anda dapat memeriksa bahwa remote baru telah ditambahkan dengan mengetik
```bash
git remote -v
```

Untuk menarik perubahan baru dari repositori induk Anda, cukup jalankan
```bash
git merge upstream/main
```
CATATAN: Ini akan memberikan konflik yang mungkin dan memungkinkan Anda untuk dengan mudah menyelesaikannya di repo Anda. Ide bagus untuk menggunakannya secara teratur di antara komit Anda sendiri untuk memastikan bahwa repo Anda terbaru dengan induknya.

## Cara Melaporkan Bug
Harap buka isu baru dengan langkah-langkah untuk memperbincangkan masalah yang Anda alami. Berikan sebanyak mungkin informasi, termasuk tangkapan layar, output teks, dan baik hasil yang diharapkan maupun aktual.

## Cara Meminta Peningkatan
Pertama, harap lihat [issues] bagian dari proyek ini dan cari masalah GitHub repositori untuk memastikan bahwa ide Anda tidak pernah (atau masih) dipertimbangkan. Kemudian, harap buat isu baru di repositori GitHub yang menggambarkan peningkatan yang ingin Anda miliki. Pastikan untuk menyertakan sebanyak mungkin detail termasuk deskripsi langkah demi langkah, contoh spesifik, tangkapan layar atau mockup, dan memberikan alasan mengapa peningkatan itu mungkin bermanfaat.

[comment]: <> (AKHIR DARI BAHASA SECTION)

<br />

[comment]: <> (START OF ENGLISH SECTION)

<div align=center>
<h1 id="english">Contributing to motionime</h1>
</div>

Welcome to the motionime project! We appreciate your interest in contributing to our open-source project. Your contributions help us improve and enhance the project for all users. Here are some guidelines to get you started:

## Contribution Rules📚:
Before you begin contributing, please read and adhere to our **[Code of Conduct](CODE_OF_CONDUCT.md)**. We expect all contributors to follow these guidelines to ensure a welcoming and inclusive environment. Guidelines to avoid unwanted things:
- You are allowed to make more than one pull request.
- Do NOT remove other content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works 😉
- Make sure your create a separate branch before opening a PR.
- Keep your pull request concise and focused on a single issue or feature to minimize merge conflicts.
- Ensure that your component is well-documented and follows best practices.
- Use meaningful names for your components and keep the codebase clean and organised.
- Write clear and informative commit messages.
- Be kind and respectful to other contributors.
- Be open to feedback and engage in discussions to improve your contribution.

## Getting Started🤩🤗:
To contribute to the motionime project, follow these steps:

- Fork this repository (Click the "Fork" button on the top right of this repository to create your own copy)

- Clone your forked repository:
```bash
git clone https://github.com/{your-github-username}/motionime.git
```
- Navigate to the project directory:
```bash
cd motionime
```
- Install dependencies:
```bash
npm install
```
- Create a new branch for your contribution. Name it appropriately to describe the work you're doing:
```bash
git checkout -b feature/new-feature
```
- Make your changes and commit, write code, fix bugs, or add new features. Commit your changes with clear and descriptive commit messages:
```bash
git commit -m "Add a New Feature"
```
- Push your changes to your fork:
```bash
git push origin feature/new-feature
```
- Create a pull request: Visit the original motionime repository on GitHub and click the "New Pull Request" button. Provide a detailed description of your changes in the pull request, and our team will review your contribution.

## Avoid Conflicts {Syncing your fork}
An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.
```bash
git remote add upstream https://github.com/motionime/motionime.git
```

You can verify that the new remote has been added by typing
```bash
git remote -v
```

To pull any new changes from your parent repository simply run
```bash
git merge upstream/main
```
NOTE: This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

## How to Report Bugs
Please open a new issue with steps to reproduce the problem you're experiencing. Provide as much information as possible, including screenshots, text output, and both your expected and actual results.

[issues]: https://github.com/motionime/motionime/issues

## How to Request Enhancements
First, please refer to the [issues] section of this project and search the repository's GitHub issues to make sure that your idea has not been (or is not still) considered. Then, please create a new issue in the GitHub repository describing the enhancement you would like to have. Be sure to include as much detail as possible including step-by-step descriptions, specific examples, screenshots or mockups, and providing a reason why the enhancement might be worthwhile.

[comment]: <> (END OF ENGLISH SECTION)

### Let's make motionime amazing together! Happy coding! 🎉
