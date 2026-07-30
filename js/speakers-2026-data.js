/* Edit this file directly and refresh the page to update speaker cards. */
(function () {
  const speakerData = {
    speakerTeaserCount: 7,
    speakerCardPlaceholderDetail: "waiting for profile details",
    speakers2026: [
      // --- Top row (teaser) ---
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
        id: "speaker-11-ek-patthanakul",
        name: "ผศ.ดร.เอกก์ ภทรธนกุล",
        sourceImage: "images/speakers/2026-speakers-with-borders/ผศ.ดร.เอกก์ ภทรธนกุล.png",
        detail: "หัวหน้าภาควิชาการตลาด คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย และนายกสมาคมการตลาดแห่งประเทศไทย",
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
        description_left_margin: "35%",
        description_right_margin: "5%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-15-oramon-sapthaweetham",
        name: "คุณอรมน ทรัพย์ทวีธรรม",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณอรมน ทรัพย์ทวีธรรม.png",
        detail: "อธิบดีกรมทรัพย์สินทางปัญญา",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "30%",
        description_right_margin: "6%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      // {
      //   id: "speaker-22-supawan-teeratat",
      //   name: "ดร.ศุภวรรณ ตีระรัตน์",
      //   sourceImage: "images/speakers/2026-speakers-with-borders/ดร.ศุภวรรณ ตีระรัตน์.png",
      //   detail: "ผู้อำนวยการสำนักงานส่งเสริมการจัดประชุมและนิทรรศการ (องค์การมหาชน)",
      //   name_left_margin: "35%",
      //   name_right_margin: "5%",
      //   name_font_size: "11px",
      //   description_left_margin: "27%",
      //   description_right_margin: "0%",
      //   description_font_size: "8px",
      //   hasSourceImage: true
      // },
      {
        id: "speaker-25-supanich-thiansing",
        name: "คุณศุภานิช เฑียรสิงห์",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณศุภานิช เฑียรสิงห์.png",
        detail: "ผู้อำนวยการฝ่ายส่งเสริมการจัดประชุมและการเดินทางเพื่อเป็นรางวัล สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ (TCEB)",
        name_left_margin: "35%",
        name_right_margin: "5%",
        name_font_size: "11px",
        description_left_margin: "27%",
        description_right_margin: "0%",
        description_font_size: "8px",
        hasSourceImage: true
      },
      {
        id: "speaker-26-krichphaka-boonfueang",
        name: "ดร.กริชผกา บุญเฟื่อง",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร.กริชผกา บุญเฟื่อง.png",
        detail: "ผู้อำนวยการสำนักงานนวัตกรรมแห่งชาติ",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-27-jeerayu-jarukittiworakan",
        name: "คุณจีระยุ จารุกิตติวรกานต์",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณจีระยุ จารุกิตติวรกานต์.png",
        detail: "เลขาธิการสภาอุตสาหกรรมท่องเที่ยวแห่งประเทศไทย (สทท.)",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-28-nakan-taviyawat",
        name: "คุณนาคาญ์ ทวิชาวัฒน์",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณนาคาญ์ ทวิชาวัฒน์.png",
        detail: "รองประธานสถาบันพัฒนาอุตสาหกรรมสร้างสรรค์ สภาอุตสาหกรรมแห่งประเทศไทย",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-29-surasak-vanichwetpiboon",
        name: "คุณสุรศักดิ์ วนิชเวทย์พิบูล",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณสุรศักดิ์ วนิชเวทย์พิบูล.png",
        detail: "CTO of Huawei Cloud Thailand",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      // --- Bottom row ---
      {
        id: "speaker-07-magdalena-florek",
        name: "Dr. hab. Magdalena Florek",
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
      // {
      //   id: "speaker-10-somchai-bhakdisrivivat",
      //   name: "รศ.ดร.สมชาย ภคภาสน์วิวัฒน์",
      //   sourceImage: "images/speakers/2026-speakers-with-borders/รศ.ดร.สมชาย ภคภาสน์วิวัฒน์.png",
      //   detail: "นักเศรษฐศาสตร์และวิชาการอิสระด้านความสัมพันธ์ระหว่างประเทศ",
      //   name_left_margin: "40%",
      //   name_right_margin: "-10%",
      //   name_font_size: "9px",
      //   description_left_margin: "35%",
      //   description_right_margin: "-10%",
      //   description_font_size: "6px",
      //   hasSourceImage: true
      // },
      {
        id: "speaker-23-feng-jing",
        name: "Dr. Feng Jing",
        sourceImage: "images/speakers/2026-speakers-with-borders/Dr. Feng Jing,  Chief of Culture Unit, UNESCO Bangkok.png",
        detail: "Chief of Culture Unit, UNESCO Bangkok",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-24-maneeratana-anulomsombat",
        name: "คุณมณีรัตน์ อนุโลมสมบัติ",
        sourceImage: "images/speakers/2026-speakers-with-borders/มณีรัตน์ อนุโลมสมบัติ .png",
        detail: "ประธานเจ้าหน้าที่บริหาร SEA (ประเทศไทย)",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-20-pichit-weerangkoobut",
        name: "คุณพิชิต วีรังคบุตร",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณพิชิต วีรังคบุตร.png",
        detail: "รองผู้อำนวยการสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์",
        name_left_margin: "35%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "45%",
        description_right_margin: "0%",
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
      },
      {
        id: "speaker-30-surasak-luangusakul",
        name: "คุณสุรศักดิ์ เหลืองอุษากุล",
        sourceImage: "images/speakers/2026-speakers-with-borders/คุณสุรศักดิ์ เหลืองอุษากุล.png",
        detail: "อุปนายกฝ่ายการตลาดดิจิตัลและเทคโนโลยี สมาคมการตลาดแห่งประเทศไทย",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-31-ratirat-na-songkhla",
        name: "ผศ. ดร.รติรัตน์ ณ สงขลา",
        sourceImage: "images/speakers/2026-speakers-with-borders/ผศ. ดร.รติรัตน์ ณ สงขลา.png",
        detail: "อาจารย์ประจำภาควิชาการตลาด คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย",
        name_left_margin: "40%",
        name_right_margin: "-10%",
        name_font_size: "9px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      // --- Hidden (kept in data but not displayed) ---
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
        id: "speaker-09-walanchalee-wattanacharoensilp",
        name: "รศ. ดร.วลัญชลี วัฒนาเจริญศิลป์",
        sourceImage: "images/speakers/2026-speakers-with-borders/รศ. ดร. วลัญชลี วัฒนาเจริญศิลป์.png",
        detail: "อาจารย์ประจำกลุ่มสาขาวิชาบริหารธุรกิจ วิทยาลัยนานาชาติ มหาวิทยาลัยมหิดล",
        name_left_margin: "30%",
        name_right_margin: "-20%",
        name_font_size: "7px",
        description_left_margin: "35%",
        description_right_margin: "-10%",
        description_font_size: "6px",
        hasSourceImage: true
      },
      {
        id: "speaker-13-viroj-jiraphatnakul",
        name: "ดร. วิโรจน์ จิรพัฒนกุล",
        sourceImage: "images/speakers/2026-speakers-with-borders/ดร. วิโรจน์ จิรพัฒนกุล.png",
        detail: "ผู้ร่วมก่อตั้ง และประธาน Skooldio Group",
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
    "speaker-03-chaiyong-rattanangkun",
    "speaker-05-pimjai-leeissaranukul",
    "speaker-14-santitarn-setthapirathai",
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
