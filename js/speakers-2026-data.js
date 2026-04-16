/* Edit this file directly and refresh the page to update speaker cards. */
(function () {
  const speakerData = {
    speakerTeaserCount: 7,
    speakerCardPlaceholderDetail: "waiting for profile details",
    speakers2026: [
      {
        id: "speaker-01-wilert-phuriwat",
        name: "ศ. ดร.วิเลิศ ภูริวัชร",
        sourceImage: "images/speakers/2026-speakers-with-borders/ศ. ดร.วิเลิศ ภูริวัชร.png",
        detail: "อธิการบดีจุฬาลงกรณ์มหาวิทยาลัย",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-02-orrchaka-sibunruang",
        name: "ดร.อรรชกา สีบุญเรือง",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร.อรรชกา สีบุญเรือง.png",
        detail: "ที่ปรึกษาคณะกรรมการสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-03-chaiyong-rattanangkun",
        name: "คุณไชยยง รัตนอังกูร",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณไชยยง รัตนอังกูร.png",
        detail: "ประธานกรรมการ สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-04-kobkarn-wattanavrangkul",
        name: "คุณกอบกาญจน์ วัฒนวรางกูร",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณกอบกาญจน์ วัฒนวรางกูร.png",
        detail: "กรรมการผู้ทรงคุณวุฒิสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "30%",
        name_right_margin: "0%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-05-pimjai-leeissaranukul",
        name: "คุณพิมพ์ใจ ลี้อิสสระนุกูล",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณพิมพ์ใจ ลี้อิสสระนุกูล.png",
        detail: "ประธานสภาอุตสาหกรรมแห่งประเทศไทย",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-11-ek-patthanakul",
        name: "ผศ.ดร.เอกก์ ภทรธนกุล",
        sourceImage: "images/speakers/2026-speakers-with-borders/ผศ.ดร.เอกก์ ภทรธนกุล.png",
        detail: "หัวหน้าภาควิชาการตลาด คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "27%",
        description_right_margin: "0%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-06-chakrit-pichyangkura",
        name: "ดร.ชาคริต พิชญางกูร",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร.ชาคริต พิชญางกูร.png",
        detail: "ผู้อำนวยการสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-07-magdalena-forex",
        name: "Dr. hab. Magdalena Forex",
        sourceImage: "images/speakers/2026-speakers-with-borders/Dr. hab. Magdalena Florek.png",
        detail: "คณะกรรมการจาก International Place Branding Association (IPBA)",
        name_left_margin: "35%",
        name_right_margin: "-15%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-08-viriya-techarungruangroj",
        name: "รศ. ดร.วิริยะ เตชะรุ่งโรจน์",
        sourceImage: "images/speakers/2026-speakers-with-borders/รศ. ดร.วิริยะ เตชะรุ่งโรจน์.png",
        detail: "ผู้อำนวยการสถาบันบริหารจัดการเทคโนโลยีและนวัตกรรม (INT) มหาลัยมหิดล",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-09-walanchalee-wattanacharoensilp",
        name: "รศ. ดร.วลัญชลี วัฒนาเจริญศิลป์",
        sourceImage: "images/speakers/2026-speakers-with-borders/รศ. ดร. วลัญชลี วัฒนาเจริญศิลป์.png",
        detail: "อาจารย์ประจำสาขาวิชาการจัดการการท่องเที่ยวและการบริการ วิทยาลัยนานาชาติ มหาวิทยาลัยมหิดล",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-10-somchai-bhakdisrivivat",
        name: "รศ.ดร.สมชาย ภคภาสน์วิวัฒน์",
        sourceImage: "images/speakers/2026-speakers-with-borders/รศ.ดร.สมชาย ภคภาสน์วิวัฒน์.png",
        detail: "นักเศรษฐศาสตร์และวิชาการอิสระด้านความสัมพันธ์ระหว่างประเทศ",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-13-viroj-jiraphatnakul",
        name: "ดร. วิโรจน์ จิรพัฒนกุล",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร. วิโรจน์ จิรพัฒนกุล.png",
        detail: "ผู้ร่วมก่อตั้งและประธานกลุ่มบริษัท Skooldio",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-14-santitarn-setthapirathai",
        name: "ดร. สันติธาร เสถียรไทย",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร. สันติธาร เสถียรไทย.png",
        detail: "กรรมการผู้ทรงคุณวุฒิของคณะกรรมการนโยบายการเงิน ธนาคารแห่งประเทศไทย",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-15-oramon-sapthaweetham",
        name: "คุณอรมน ทรัพย์ทวีธรรม",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณอรมน ทรัพย์ทวีธรรม.png",
        detail: "อธิบดีกรมทรัพย์สินทางปัญญา",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-16-rehana-mughal",
        name: "Ms. Rehana Mughal",
        sourceImage: "images/speakers/2026-speakers-with-borders/Ms. Rehana Mughal.png",
        detail: "ผู้อำนวยการด้านเศรษฐกิจสร้างสรรค์ จาก British Council",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-12-juthamas-visalsingh",
        name: "ผศ.ดร.จุฑามาศ วิศาลสิงห์",
        sourceImage: "images/speakers/2026-speakers-with-borders/ผศ.ดร.จุฑามาศ วิศาลสิงห์.png",
        detail: "ประธานเครือข่าย Thailand Gastronomy Network",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-17-natthawut-amornwiwat",
        name: "คุณณัฐวุฒิ อมรวิวัฒน์",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณณัฐวุฒิ อมรวิวัฒน์.png",
        detail: "รองประธานสภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-18-pichai-jirathivat",
        name: "คุณพิชัย จิราธิวัฒน์",
        sourceImage: "",
        detail: "กรรมการบริหาร กลุ่มเซ็นทรัล (Central Group)",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: false
      },
      {
        id: "speaker-20-pichit-weerangkoobut",
        name: "คุณพิชิต วีรังคบุตร",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณพิชิต วีรังคบุตร.png",
        detail: "รองผู้อำนวยการสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-21-kharin-kangwanakitti",
        name: "คุณฆฤณ กังวานกิตติ",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณฆฤณ กังวานกิตติ.png",
        detail: "ผู้อำนวยการสำนักภาคใต้ สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-19-dolchai-bunyaratavej",
        name: "คุณดลชัย บุณยะรัตเวช",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณดลชัย บุณยะรัตเวช.png",
        detail: "ประธานกรรมการบริหาร INSPIRITY LIMITED PARTNERSHIP",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      }
    ]
  };

  speakerData.getSpeakerImagePath = function getSpeakerImagePath(speaker) {
    const sourceImage = speaker && speaker.sourceImage ? speaker.sourceImage : "";

    if (!sourceImage) {
      return "";
    }

    if (sourceImage.indexOf("images/speakers/2026-speakers-with-borders/") === 0) {
      return sourceImage
        .replace(
          "images/speakers/2026-speakers-with-borders/",
          "images/speakers/2026-speakers-with-borders-optimized/"
        )
        .replace(/\.[^.]+$/, ".webp");
    }

    return sourceImage;
  };

  speakerData.hiddenSpeakerIds = [
    "speaker-09-walanchalee-wattanacharoensilp",
    "speaker-10-somchai-bhakdisrivivat",
    "speaker-13-viroj-jiraphatnakul",
    "speaker-14-santitarn-setthapirathai",
    "speaker-15-oramon-sapthaweetham",
    "speaker-17-natthawut-amornwiwat",
    "speaker-18-pichai-jirathivat"
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
