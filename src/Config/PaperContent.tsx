export const paperContent = {
  title: 'FlashSR',
  paperInfo: '',
  //'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024',
  author: 'Jaekwon Im, Juhan Nam',
  affiliation:
    'Graduate School of Culture Technology, KAIST, Republic of Korea',
  abstract:
    'Properly setting up recording conditions, including microphone type and placement, room acoustics, and ambient noise, is essential to obtaining the desired acoustic characteristics of speech. In this paper, we propose Diff-R-EN-T, a Diffusion model for Recording ENvironment Transfer which transforms the input speech to have the recording conditions of a reference speech while preserving the speech content. Our model comprises the content enhancer, the recording environment encoder, and the diffusion decoder which generates the target mel-spectrogram by utilizing both enhancer and encoder as input conditions. We evaluate DiffRENT in the speech enhancement and acoustic matching scenarios. The results show that DiffRENT generalizes well to unseen environments and new speakers. Also, the proposed model achieves superior performances in objective and subjective evaluation.',
  reference: '',
  //'[1] Jiaqi Su, Zeyu Jin, and Adam Finkelstein. Acoustic matching by embedding impulse responses. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 426–430. IEEE, 2020. \n [2] Haohe Liu, Xubo Liu, Qiuqiang Kong, Qiao Tian, Yan Zhao, DeLiang Wang, Chuanzeng Huang, and Yuxuan Wang. VoiceFixer: A Unified Framework for High-Fidelity Speech Restoration. In Proc. Interspeech 2022, pages 4232–4236, 2022.',
  contactLink: 'https://jakeoneijk.github.io/',
  paperLink: 'https://arxiv.org/abs/2401.08102',
}
