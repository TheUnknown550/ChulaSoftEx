/* Edit this file directly and refresh the page to update speaker cards. */
(function () {
  const speakerData = {
  "speakerTeaserCount": 7,
  "speakerCardPlaceholderDetail": "waiting for profile details",
  "speakers2026": [
    {
      "id": "speaker-01-wilert-phuriwat",
      "name": "ศ. ดร.วิเลิศ ภูริวัชร",
      "sourceImage": "images/speakers/2026-speakers-with-borders/ศ. ดร.วิเลิศ ภูริวัชร.png",
      "detail": "อธิการบดีจุฬาลงกรณ์มหาวิทยาลัย",
      "name_left_margin": "35%",
      "name_right_margin": "5%",
      "name_font_size": "14px",
      "description_left_margin": "30%",
      "description_right_margin": "5%",
      "description_font_size": "11px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-02-viriya-techarungruangroj",
      "name": "รศ. ดร.วิริยะ เตชะรุ่งโรจน์",
      "sourceImage": "images/speakers/2026-speakers-with-borders/รศ. ดร.วิริยะ เตชะรุ่งโรจน์.png",
      "detail": "ผอ. สถาบัน INT ม.มหิดล และนายก AITP",
      "name_left_margin": "33%",
      "name_right_margin": "2%",
      "name_font_size": "12px",
      "description_left_margin": "30%",
      "description_right_margin": "5%",
      "description_font_size": "11px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-03-somchai-bhakdisrivivat",
      "name": "รศ.ดร.สมชาย ภคภาสน์วิวัฒน์",
      "sourceImage": "images/speakers/2026-speakers-with-borders/รศ.ดร.สมชาย ภคภาสน์วิวัฒน์.png",
      "detail": "นักเศรษฐศาสตร์และวิชาการอิสระด้านความสัมพันธ์ระหว่างประเทศ",
      "name_left_margin": "30%",
      "name_right_margin": "0%",
      "name_font_size": "11px",
      "description_left_margin": "30%",
      "description_right_margin": "0%",
      "description_font_size": "10px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-04-magdalena-florek",
      "name": "Dr. hab. Magdalena Florek",
      "sourceImage": "images/speakers/2026-speakers-with-borders/Dr. hab. Magdalena Florek.png",
      "detail": "คณะกรรมการจาก International Place Branding Association (IPBA)",
      "name_left_margin": "33%",
      "name_right_margin": "0%",
      "name_font_size": "11px",
      "description_left_margin": "30%",
      "description_right_margin": "0%",
      "description_font_size": "10px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-05-juthamas-visalsingh",
      "name": "ผศ.ดร.จุฑามาศ วิศาลสิงห์",
      "sourceImage": "images/speakers/2026-speakers-with-borders/ผศ.ดร.จุฑามาศ วิศาลสิงห์.png",
      "detail": "ประธานกรรมการบริหาร Perfect Link Consulting Group",
      "name_left_margin": "30%",
      "name_right_margin": "0%",
      "name_font_size": "12px",
      "description_left_margin": "35%",
      "description_right_margin": "10%",
      "description_font_size": "9px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-06-walanchalee-wattanacharoensilp",
      "name": "ดร.วลัญชลี วัฒนาเจริญศิลป์",
      "sourceImage": "images/speakers/2026-speakers-with-borders/รศ. ดร. วลัญชลี วัฒนาเจริญศิลป์.png",
      "detail": "อาจารย์ประจำสาขาวิชาการจัดการการท่องเที่ยวและการบริการ วิทยาลัยนานาชาติ มหาวิทยาลัยมหิดล",
      "name_left_margin": "30%",
      "name_right_margin": "0%",
      "name_font_size": "11px",
      "description_left_margin": "30%",
      "description_right_margin": "0%",
      "description_font_size": "9px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-07-viroj-jiraphatnakul",
      "name": "ดร. วิโรจน์ จิรพัฒนกุล",
      "sourceImage": "images/speakers/2026-speakers-with-borders/ดร. วิโรจน์ จิรพัฒนกุล.png",
      "detail": "ผู้ร่วมก่อตั้ง และ ประธาน Skooldio Group",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "10px",
      "description_left_margin": "35%",
      "description_right_margin": "-10%",
      "description_font_size": "9px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-08-santitarn-setthapirathai",
      "name": "ดร. สันติธาร เสถียรไทย",
      "sourceImage": "images/speakers/2026-speakers-with-borders/ดร. สันติธาร เสถียรไทย.png",
      "detail": "กรรมการผู้ทรงคุณวุฒิของคณะกรรมการนโยบายการเงิน ธนาคารแห่งประเทศไทย",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "10px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-09-rehana-mughal",
      "name": "Ms. Rehana Mughal",
      "sourceImage": "images/speakers/2026-speakers-with-borders/Ms. Rehana Mughal.png",
      "detail": "ผู้อำนวยการด้านเศรษฐกิจสร้างสรรค์ จาก British Council",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "11px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-11-pichit-weerangkoobut",
      "name": "คุณพิชิต วีรังคบุตร",
      "sourceImage": "images/speakers/2026-speakers-with-borders/คุณพิชิต วีรังคบุตร.png",
      "detail": "รองผู้อำนวยการสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "11px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-12-kharin-kangwanakitti",
      "name": "คุณฆฤณ กังวานกิตติ",
      "sourceImage": "images/speakers/2026-speakers-with-borders/คุณฆฤณ กังวานกิตติ.png",
      "detail": "ผู้อำนวยการสำนักภาคใต้ สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "11px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-13-dolchai-bunyaratavej",
      "name": "คุณดลชัย บุณยะรัตเวช",
      "sourceImage": "images/speakers/2026-speakers-with-borders/คุณดลชัย บุณยะรัตเวช.png",
      "detail": "ประธานกรรมการบริหาร INSPIRITY LIMITED PARTNERSHIP",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "10px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-14-natthawut-amornwiwat",
      "name": "คุณณัฐวุฒิ อมรวิวัฒน์",
      "sourceImage": "images/speakers/2026-speakers-with-borders/คุณณัฐวุฒิ อมรวิวัฒน์.png",
      "detail": "รองประธานสภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย",
      "name_left_margin": "40%",
      "name_right_margin": "-10%",
      "name_font_size": "10px",
      "description_left_margin": "40%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    },
    {
      "id": "speaker-15-oramon-sapthaweetham",
      "name": "คุณอรมน ทรัพย์ทวีธรรม",
      "sourceImage": "images/speakers/2026-speakers-with-borders/คุณอรมน ทรัพย์ทวีธรรม.png",
      "detail": "อธิบดีกรมทรัพย์สินทางปัญญา",
      "name_left_margin": "37%",
      "name_right_margin": "-11%",
      "name_font_size": "10px",
      "description_left_margin": "35%",
      "description_right_margin": "-10%",
      "description_font_size": "8px",
      "hasSourceImage": true
    }
  ]
};

  speakerData.getSpeakerImagePath = function getSpeakerImagePath(speaker) {
    const sourceImage = speaker && speaker.sourceImage ? speaker.sourceImage : "";
    if (!sourceImage) {
      return "";
    }

    return sourceImage
      .replace(
        "images/speakers/2026-speakers-with-borders/",
        "images/speakers/2026-speakers-with-borders-optimized/"
      )
      .replace(/\.[^.]+$/, ".webp");
  };

  speakerData.hiddenSpeakerIds = [
    "speaker-03-somchai-bhakdisrivivat",
    "speaker-05-juthamas-visalsingh",
    "speaker-06-walanchalee-wattanacharoensilp",
    "speaker-08-santitarn-setthapirathai",
    "speaker-12-kharin-kangwanakitti",
    "speaker-13-dolchai-bunyaratavej",
    "speaker-14-natthawut-amornwiwat",
    "speaker-15-oramon-sapthaweetham"
  ];

  speakerData.getVisibleSpeakers2026 = function getVisibleSpeakers2026() {
    return speakerData.speakers2026.filter(function filterVisibleSpeaker(speaker) {
      return !speakerData.hiddenSpeakerIds.includes(speaker.id);
    });
  };

  speakerData.getSpeakerTeaserList = function getSpeakerTeaserList() {
    return speakerData
      .getVisibleSpeakers2026()
      .slice(0, speakerData.speakerTeaserCount);
  };

  globalThis.SOFEX_SPEAKER_DATA = speakerData;
})();
