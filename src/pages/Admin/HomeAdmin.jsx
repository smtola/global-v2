import React, { useState } from "react";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import "./HomeAdmin.css";
import Scroll from "../../Scroll";
import imgBanner from "../../assets/images/banner/cover.jpg";
import imgFounder from "../../assets/images/founder.png";
import iconVission from "../../assets/images/icon/vision.png";
import iconMission from "../../assets/images/icon/mission.png";
import iconTrande from "../../assets/images/icon/trande.png";
import iconAccount from "../../assets/images/icon/account.png";
import iconTax from "../../assets/images/icon/tax.png";
import founderIcon from "../../assets/images/icon-founder.png";
import accountingIcon from "../../assets/images/accounting.png";
import partnerIcon from "../../assets/images/partner.png";
import certificateImage from "../../assets/images/certificate.jpg";
import vatImage from "../../assets/images/VAT-2023.jpg";
import ahNhabanImage from "../../assets/images/អាជ្ញាប័ណ្ណភ្នាក់ងារ_Fianl_update.jpg";
import { useTranslation } from "../../hooks/useTranslation";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../config/db";
const HomeAdmin = () => {
  const navigate = useNavigate();
  const iconsTick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -7 24 24"
      width="28"
      fill="currentColor"
    >
      <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
    </svg>
  );
  const translations = useTranslation("en");
  const translationsKh = useTranslation("kh");
  const token = localStorage.getItem("jwt");

  const [showEditWelcome, setShowEditWelcome] = useState(false);
  const [showEditPWelcome, setShowPWelcome] = useState(true);

  const [valueEn, setWelcomeEn] = useState("");
  const [valueKh, setWelcomeKh] = useState("");

  const [valueAboutCmEn, setAboutCompanyEn] = useState("");
  const [valueAboutCmKh, setAboutCompanyKh] = useState("");

  const [valueVisionDetailEn, setVisionDetailEn] = useState("");
  const [valueVisionDetailKh, setVisionDetailKh] = useState("");

  const [valueMissionEn, setMissionEn] = useState("");
  const [valueMissionKh, setMissionKh] = useState("");
  const [valueIntegrityTitleEn, setIntegrityTitleEn] = useState("");
  const [valueIntegrityTitleKh, setIntegrityTitleKh] = useState("");

  const [valueIntegrityDetailEn, setIntegrityDetailEn] = useState("");
  const [valueIntegrityDetailKh, setIntegrityDetailKh] = useState("");

  const [valueExTitleEn, setExTitleEn] = useState("");
  const [valueExTitleKh, setExTitleKh] = useState("");

  const [valueExDetailEn, setExDetailEn] = useState("");
  const [valueExDetailKh, setExDetailKh] = useState("");

  const [valueCsTitleEn, setCsTitleEn] = useState("");
  const [valueCsTitleKh, setCsTitleKh] = useState("");

  const [valueCsDetailEn, setCsDetailEn] = useState("");
  const [valueCsDetailKh, setCsDetailKh] = useState("");

  const [valueInnovationTitleEn, setInnovationTitleEn] = useState("");
  const [valueInnovationTitleKh, setInnovationTitleKh] = useState("");

  const [valueInnovationDetailEn, setInnovationDetailEn] = useState("");
  const [valueInnovationDetailKh, setInnovationDetailKh] = useState("");

  const [valueCollaborationTitleEn, setCollaborationTitleEn] = useState("");
  const [valueCollaborationTitleKh, setCollaborationTitleKh] = useState("");

  const [valueCollaborationDetailEn, setCollaborationDetailEn] = useState("");
  const [valueCollaborationDetailKh, setCollaborationDetailKh] = useState("");

  const [valueFounderNameEn, setFounderNameEn] = useState("");
  const [valueFounderNameKh, setFounderNameKh] = useState("");

  const [valueFounderTitleEn, setFounderTitleEn] = useState("");
  const [valueFounderTitleKh, setFounderTitleKh] = useState("");

  const [valueEducationEn, setEducationEn] = useState("");
  const [valueEducationKh, setEducationKh] = useState("");

  const [valueHeaderEn, setHeaderEn] = useState("");
  const [valueHeaderKh, setHeaderKh] = useState("");

  const [valueBodyEn, setBodyEn] = useState("");
  const [valueBodyKh, setBodyKh] = useState("");

  const [valueFooterEn, setFooterEn] = useState("");
  const [valueFooterKh, setFooterKh] = useState("");

  const [valueFounderChEn, setFounderChEn] = useState("");
  const [valueFounderChKh, setFounderChKh] = useState("");

  const [valueTandAEn, setTandAEn] = useState("");
  const [valueTandAKh, setTandAKh] = useState("");

  const [valuePartnerEn, setPartnerEn] = useState("");
  const [valuePartnerKh, setPartnerKh] = useState("");

  const [valueServiceEn, setServiceEn] = useState("");
  const [valueServiceKh, setServiceKh] = useState("");

  const [valueOurServiceDetailEn, setOurServiceDetailEn] = useState("");
  const [valueOurServiceDetailKh, setOurServiceDetailKh] = useState("");

  const [valueTssEn, setTssEn] = useState("");
  const [valueTssKh, setTssKh] = useState("");

  const [valueTssContentOneEn, setTssContentOneEn] = useState("");
  const [valueTssContentOneKh, setTssContentOneKh] = useState("");

  const [valueTssContentTwoEn, setTssContentTwoEn] = useState("");
  const [valueTssContentTwoKh, setTssContentTwoKh] = useState("");

  const [valueAssEn, setAssEn] = useState("");
  const [valueAssKh, setAssKh] = useState("");

  const [valueAssContentOneEn, setAssContentOneEn] = useState("");
  const [valueAssContentOneKh, setAssContentOneKh] = useState("");

  const [valueAssContentTwoEn, setAssContentTwoEn] = useState("");
  const [valueAssContentTwoKh, setAssContentTwoKh] = useState("");

  const [valueTadEn, setTadEn] = useState("");
  const [valueTadKh, setTadKh] = useState("");

  const [valueTadContentOneEn, setTadContentOneEn] = useState("");
  const [valueTadContentOneKh, setTadContentOneKh] = useState("");

  const [valueTadContentTwoEn, setTadContentTwoEn] = useState("");
  const [valueTadContentTwoKh, setTadContentTwoKh] = useState("");

  const [valueBsrEn, setBsrEn] = useState("");
  const [valueBsrKh, setBsrKh] = useState("");

  const [valueBsrContentOneEn, setBsrContentOneEn] = useState("");
  const [valueBsrContentOneKh, setBsrContentOneKh] = useState("");

  const [valueBsrContentTwoEn, setBsrContentTwoEn] = useState("");
  const [valueBsrContentTwoKh, setBsrContentTwoKh] = useState("");

  const [valueBsrContentThreeEn, setBsrContentThreeEn] = useState("");
  const [valueBsrContentThreeKh, setBsrContentThreeKh] = useState("");

  const [valueCuEn, setCuEn] = useState("");
  const [valueCuKh, setCuKh] = useState("");

  const [valueCuContentOneEn, setCuContentOneEn] = useState("");
  const [valueCuContentOneKh, setCuContentOneKh] = useState("");

  const [valueCuContentTwoEn, setCuContentTwoEn] = useState("");
  const [valueCuContentTwoKh, setCuContentTwoKh] = useState("");

  const [valueCuContentThreeEn, setCuContentThreeEn] = useState("");
  const [valueCuContentThreeKh, setCuContentThreeKh] = useState("");

  const [valueCcEn, setCcEn] = useState("");
  const [valueCcKh, setCcKh] = useState("");

  const [valueCcContentOneEn, setCcContentOneEn] = useState("");
  const [valueCcContentOneKh, setCcContentOneKh] = useState("");

  const [valueCcContentTwoEn, setCcContentTwoEn] = useState("");
  const [valueCcContentTwoKh, setCcContentTwoKh] = useState("");

  const [valueCcContentThreeEn, setCcContentThreeEn] = useState("");
  const [valueCcContentThreeKh, setCcContentThreeKh] = useState("");

  const [valueWhyUsEn, setWhyUsEn] = useState("");
  const [valueWhyUsKh, setWhyUsKh] = useState("");

  const [valueWhyUsOneEn, setWhyUsOneEn] = useState("");
  const [valueWhyUsOneKh, setWhyUsOneKh] = useState("");

  const [valueWhyUsTwoEn, setWhyUsTwoEn] = useState("");
  const [valueWhyUsTwoKh, setWhyUsTwoKh] = useState("");

  const [valueWhyUsThreeEn, setWhyUsThreeEn] = useState("");
  const [valueWhyUsThreeKh, setWhyUsThreeKh] = useState("");

  const [valueWhyUsFourEn, setWhyUsFourEn] = useState("");
  const [valueWhyUsFourKh, setWhyUsFourKh] = useState("");

  const [valueWhyUsFiveEn, setWhyUsFiveEn] = useState("");
  const [valueWhyUsFiveKh, setWhyUsFiveKh] = useState("");

  const [valueWhyUsSixEn, setWhyUsSixEn] = useState("");
  const [valueWhyUsSixKh, setWhyUsSixKh] = useState("");

  const [valueWhyUsSevenEn, setWhyUsSevenEn] = useState("");
  const [valueWhyUsSevenKh, setWhyUsSevenKh] = useState("");

  const [valueOurClientEn, setOurClientEn] = useState("");
  const [valueOurClientKh, setOurClientKh] = useState("");

  const [valueOurClientDetailEn, setOurClientDetailEn] = useState("");
  const [valueOurClientDetailKh, setOurClientDetailKh] = useState("");

  const [valueItemOneEn, setItemOneEn] = useState("");
  const [valueItemOneKh, setItemOneKh] = useState("");

  const [valueItemDetailOneEn, setItemDetailOneEn] = useState("");
  const [valueItemDetailOneKh, setItemDetailOneKh] = useState("");

  const [valueItemTwoEn, setItemTwoEn] = useState("");
  const [valueItemTwoKh, setItemTwoKh] = useState("");

  const [valueItemDetailTwoEn, setItemDetailTwoEn] = useState("");
  const [valueItemDetailTwoKh, setItemDetailTwoKh] = useState("");

  const [valueItemThreeEn, setItemThreeEn] = useState("");
  const [valueItemThreeKh, setItemThreeKh] = useState("");

  const [valueItemDetailThreeEn, setItemDetailThreeEn] = useState("");
  const [valueItemDetailThreeKh, setItemDetailThreeKh] = useState("");

  const [valueItemFourEn, setItemFourEn] = useState("");
  const [valueItemFourKh, setItemFourKh] = useState("");

  const [valueItemDetailFourEn, setItemDetailFourEn] = useState("");
  const [valueItemDetailFourKh, setItemDetailFourKh] = useState("");


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleShowWelcomeEdit = () => {
    setShowPWelcome(false);
    setShowEditWelcome(true);
  };

  // handle submit edit
  const handleEditWelcomeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "welcome",
      value: valueEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 3);

    const updateDataKh = {
      lang_code: "kh",
      key: "welcome",
      value: valueKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 4);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEditAboutCmSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "about_p",
      value: valueAboutCmEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 14);

    const updateDataKh = {
      lang_code: "kh",
      key: "about_p",
      value: valueAboutCmKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 89);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEditVisionDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "vision_detail",
      value: valueVisionDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 16);

    const updateDataKh = {
      lang_code: "kh",
      key: "vision_detail",
      value: valueVisionDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 91);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEditMissionSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "mission_detail",
      value: valueMissionEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 18);

    const updateDataKh = {
      lang_code: "kh",
      key: "mission_detail",
      value: valueMissionKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 93);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEditIntegrityTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "integrity_title",
      value: valueIntegrityTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 20);

    const updateDataKh = {
      lang_code: "kh",
      key: "integrity_title",
      value: valueIntegrityTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 95);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEditIntegrityDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "integrity_detail",
      value: valueIntegrityDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 21);

    const updateDataKh = {
      lang_code: "kh",
      key: "integrity_detail",
      value: valueIntegrityDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 96);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleExTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "excellence_title",
      value: valueExTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 22);

    const updateDataKh = {
      lang_code: "kh",
      key: "excellence_title",
      value: valueExTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 97);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleExDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "excellence_detail",
      value: valueExDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 23);

    const updateDataKh = {
      lang_code: "kh",
      key: "excellence_detail",
      value: valueExDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 98);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCsTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cs",
      value: valueCsTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 24);

    const updateDataKh = {
      lang_code: "kh",
      key: "cs",
      value: valueCsTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 99);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCsDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cs_detail",
      value: valueCsDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 25);

    const updateDataKh = {
      lang_code: "kh",
      key: "cs_detail",
      value: valueCsDetailKh,
    };

    const { error } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 100);

    if (error) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleInnovationTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "Innovation",
      value: valueInnovationTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 26);

    const updateDataKh = {
      lang_code: "kh",
      key: "Innovation",
      value: valueInnovationTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 101);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleInnovationDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "inovation_detail",
      value: valueInnovationDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 27);

    const updateDataKh = {
      lang_code: "kh",
      key: "inovation_detail",
      value: valueInnovationDetailKh,
    };

    const { error } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 102);

    if (error) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCollaborationTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "collaboration",
      value: valueCollaborationTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 28);

    const updateDataKh = {
      lang_code: "kh",
      key: "collaboration",
      value: valueCollaborationTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 103);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCollaborationDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "collaboration_detail",
      value: valueCollaborationDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 29);

    const updateDataKh = {
      lang_code: "kh",
      key: "collaboration_detail",
      value: valueCollaborationDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 104);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleFounderNameSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "founder_name",
      value: valueFounderNameEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 31);

    const updateDataKh = {
      lang_code: "kh",
      key: "founder_name",
      value: valueFounderNameKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 106);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleFounderTitleSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "founder_title",
      value: valueFounderTitleEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 30);

    const updateDataKh = {
      lang_code: "kh",
      key: "founder_title",
      value: valueFounderTitleKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 105);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "education",
      value: valueEducationEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 33);

    const updateDataKh = {
      lang_code: "kh",
      key: "education",
      value: valueEducationKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 108);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleHeaderSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "header",
      value: valueHeaderEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 35);

    const updateDataKh = {
      lang_code: "kh",
      key: "header",
      value: valueHeaderKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 110);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleBodySubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "body",
      value: valueBodyEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 35);

    const updateDataKh = {
      lang_code: "kh",
      key: "body",
      value: valueBodyKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 110);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "footer",
      value: valueFooterEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 36);

    const updateDataKh = {
      lang_code: "kh",
      key: "footer",
      value: valueFooterKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 111);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleFounderChSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "founder_ch",
      value: valueFounderChEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 37);

    const updateDataKh = {
      lang_code: "kh",
      key: "founder_ch",
      value: valueFounderChKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 112);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTandASubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "t_&_a",
      value: valueTandAEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 38);

    const updateDataKh = {
      lang_code: "kh",
      key: "t_&_a",
      value: valueTandAKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 113);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "partner",
      value: valuePartnerEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 39);

    const updateDataKh = {
      lang_code: "kh",
      key: "partner",
      value: valuePartnerKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 114);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleOurServiceSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ourservice",
      value: valueServiceEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 42);

    const updateDataKh = {
      lang_code: "kh",
      key: "ourservice",
      value: valueServiceKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 117);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleOurServiceDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ourservice_detail",
      value: valueOurServiceDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 43);

    const updateDataKh = {
      lang_code: "kh",
      key: "ourservice_detail",
      value: valueOurServiceDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 118);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTssSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tss",
      value: valueTssEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 44);

    const updateDataKh = {
      lang_code: "kh",
      key: "tss",
      value: valueTssKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 119);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTssContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tss_content_1",
      value: valueTssContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 45);

    const updateDataKh = {
      lang_code: "kh",
      key: "tss_content_1",
      value: valueTssContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 120);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTssContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tss_content_2",
      value: valueTssContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 45);

    const updateDataKh = {
      lang_code: "kh",
      key: "tss_content_2",
      value: valueTssContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 120);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleAssSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ass",
      value: valueAssEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 47);

    const updateDataKh = {
      lang_code: "kh",
      key: "ass",
      value: valueAssKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 122);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleAssContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ass",
      value: valueAssContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 48);

    const updateDataKh = {
      lang_code: "kh",
      key: "ass",
      value: valueAssContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 123);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleAssContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ass_content_2",
      value: valueAssContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 49);

    const updateDataKh = {
      lang_code: "kh",
      key: "ass_content_2",
      value: valueAssContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 124);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTadSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tad",
      value: valueTadEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 50);

    const updateDataKh = {
      lang_code: "kh",
      key: "tad",
      value: valueTadKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 125);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTadContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tad",
      value: valueTadContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 51);

    const updateDataKh = {
      lang_code: "kh",
      key: "tad",
      value: valueTadContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 126);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleTadContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "tad_content_2",
      value: valueTadContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 52);

    const updateDataKh = {
      lang_code: "kh",
      key: "tad_content_2",
      value: valueTadContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 127);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleBsrSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "bsr",
      value: valueBsrEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 53);

    const updateDataKh = {
      lang_code: "kh",
      key: "bsr",
      value: valueBsrKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 128);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleBsrContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "bsr_content_1",
      value: valueBsrContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 54);

    const updateDataKh = {
      lang_code: "kh",
      key: "bsr_content_1",
      value: valueBsrContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 129);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleBsrContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "bsr_content_2",
      value: valueBsrContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 55);

    const updateDataKh = {
      lang_code: "kh",
      key: "bsr_content_2",
      value: valueBsrContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 130);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleBsrContentThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "bsr_content_3",
      value: valueBsrContentThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 56);

    const updateDataKh = {
      lang_code: "kh",
      key: "bsr_content_3",
      value: valueBsrContentThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 131);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCuSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cu",
      value: valueCuEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 57);

    const updateDataKh = {
      lang_code: "kh",
      key: "cu",
      value: valueCuKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 132);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCuContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cu_content_1",
      value: valueCuContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 57);

    const updateDataKh = {
      lang_code: "kh",
      key: "cu_content_1",
      value: valueCuContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 132);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCuContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cu_content_2",
      value: valueCuContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 59);

    const updateDataKh = {
      lang_code: "kh",
      key: "cu_content_2",
      value: valueCuContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 134);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCuContentThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cu_content_3",
      value: valueCuContentThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 60);

    const updateDataKh = {
      lang_code: "kh",
      key: "cu_content_3",
      value: valueCuContentThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 135);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCcSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cc",
      value: valueCcEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 61);

    const updateDataKh = {
      lang_code: "kh",
      key: "cc",
      value: valueCcKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 136);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCcContentOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cc_content_1",
      value: valueCcContentOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 62);

    const updateDataKh = {
      lang_code: "kh",
      key: "cc_content_1",
      value: valueCcContentOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 137);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCcContentTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cc_content_2",
      value: valueCcContentTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 63);

    const updateDataKh = {
      lang_code: "kh",
      key: "cc_content_2",
      value: valueCcContentTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 138);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleCcContentThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "cc_content_3",
      value: valueCcContentThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 64);

    const updateDataKh = {
      lang_code: "kh",
      key: "cc_content_3",
      value: valueCcContentThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 139);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us",
      value: valueWhyUsEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 65);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us",
      value: valueWhyUsKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 140);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_1",
      value: valueWhyUsOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 66);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_1",
      value: valueWhyUsOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 141);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_2",
      value: valueWhyUsTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 67);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_2",
      value: valueWhyUsTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 142);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_3",
      value: valueWhyUsThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 68);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_3",
      value: valueWhyUsThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 143);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsFourSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_4",
      value: valueWhyUsFourEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 69);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_4",
      value: valueWhyUsFourKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 144);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsFiveSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_5",
      value: valueWhyUsFiveEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 70);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_5",
      value: valueWhyUsFiveKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 145);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleWhyUsSixSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_6",
      value: valueWhyUsSixEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 71);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_6",
      value: valueWhyUsSixKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 146);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };


  const handleWhyUsSevenSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "why_us_7",
      value: valueWhyUsSevenEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 72);

    const updateDataKh = {
      lang_code: "kh",
      key: "why_us_7",
      value: valueWhyUsSevenKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 147);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleOurClientSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "ourClient",
      value: valueOurClientEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 73);

    const updateDataKh = {
      lang_code: "kh",
      key: "ourClient",
      value: valueOurClientKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 148);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleOurClientDetailSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "client_details",
      value: valueOurClientDetailEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 74);

    const updateDataKh = {
      lang_code: "kh",
      key: "client_details",
      value: valueOurClientDetailKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 149);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_1",
      value: valueItemOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 76);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_1",
      value: valueItemOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 150);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemDetailOneSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_detail_1",
      value: valueItemDetailOneEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 77);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_detail_1",
      value: valueItemDetailOneKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 151);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_2",
      value: valueItemTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 78);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_2",
      value: valueItemTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 152);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemDetailTwoSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_2",
      value: valueItemDetailTwoEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 81);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_2",
      value: valueItemDetailTwoKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 155);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_3",
      value: valueItemThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 79);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_3",
      value: valueItemThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 153);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemDetailThreeSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_detail_3",
      value: valueItemDetailThreeEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 82);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_detail_3",
      value: valueItemDetailThreeKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 156);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemFourSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_4",
      value: valueItemFourEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 80);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_4",
      value: valueItemFourKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 154);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };

  const handleItemDetailFourSubmit = async (e) => {
    e.preventDefault();
    const updateDataEn = {
      lang_code: "en",
      key: "items_detail_4",
      value: valueItemDetailFourEn,
    };

    const { erroren } = await supabase
      .from("translations")
      .update(updateDataEn)
      .eq("id", 83);

    const updateDataKh = {
      lang_code: "kh",
      key: "items_detail_4",
      value: valueItemDetailFourKh,
    };

    const { errorkh } = await supabase
      .from("translations")
      .update(updateDataKh)
      .eq("id", 157);

    if (erroren) {
      console.error("Error updating welcome text:", erroren.message);
    }
    setShowEditWelcome(false);
    setShowPWelcome(true);
  };


  return (
    <>
      <Scroll />
      <div className="fixed w-full top-0 mx-auto bg-[#ffffff] z-[999] group p-5">
        <div className="flex gap-5 items-center">
          <Link
            to={"/dashboard"}
            className="flex items-center group-hover:bg-black/20 group-hover:underline w-[6rem] p-3 backdrop-blur-[5px] bg-opacity-100 rounded-xl transition-all duration-500"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>
            </span>
            <p>Back</p>
          </Link>
          <button
            onClick={handleShowWelcomeEdit}
            className="bg-[#050076] px-3 py-2 text-[#ffffff]"
          >
            Edit
          </button>
        </div>
      </div>
      <section>
        <div className="relative">
          <img
            src={imgBanner}
            className="w-full h-[50vh] xl:h-screen clip-path"
          />
          <div className="w-full absolute left-[5%] md:left-[26%] xl:left-[50%] top-[80%] md:top-[80%] xl:top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full h-[56vh] ps-[24vh]">
              <h1 className="text-[48px] md:text-[100px] lg:text-[120px] xl:text-[144px] 2xl:text-[164px] font-['koulen'] text-[#39B6FF] font-normal h-[48px] md:h-[100px] lg:h-[120px] xl:h-[144px] 2xl:h-[164px]">
                Global
              </h1>
              <h1 className="text-[26px] md:text-[53px] lg:text-[65px] xl:text-[77px] 2xl:text-[87px] font-['koulen'] text-[#233C96] font-normal h-[35px] md:h-[60px] lg:h-[70px] xl:h-[100px]">
                Consultancy
              </h1>
              {showEditPWelcome ? (
                <p className="cursor-pointer text-[11px] md:text-[16px] font-['inter'] text-[#233C96] font-normal w-64">
                  {translations["welcome"] || "Loading..."}
                </p>
              ) : null}
              {showEditWelcome ? (
                <form
                  onSubmit={handleEditWelcomeSubmit}
                  className="w-full max-w-lg"
                >
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    English
                  </label>
                  <textarea
                    rows="4"
                    defaultValue={translations["welcome"] || "Loading..."}
                    onChange={(e) => setWelcomeEn(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="English"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ភាសាខ្មែរ
                  </label>
                  <textarea
                    rows="4"
                    defaultValue={translationsKh["welcome"] || "Loading..."}
                    onChange={(e) => setWelcomeKh(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="English"
                    required
                  ></textarea>
                  <button
                    className="bg-[#314cb2] text-[#ffffff] px-3 py-2 rounded-full my-2"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-ful bg-[#ffffff]">
          <div className="w-full max-w-screen-xl mx-auto text-start font-['inter'] text-[#050076] p-5 md:p-12">
            <h1 className="text-[24px] md:text-[44px] font-['koulen'] font-medium">
              Global Consultancy
            </h1>
            {showEditPWelcome ? (
              <p className="text-[16px] md:text-[24px]">
                {translations["about_p"] || "Loading..."}
              </p>
            ) : null}
            {showEditWelcome ? (
              <form
                onSubmit={handleEditAboutCmSubmit}
                className="w-full max-w-lg"
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  English
                </label>
                <textarea
                  rows="4"
                  defaultValue={translations["about_p"] || "Loading..."}
                  onChange={(e) => setAboutCompanyEn(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ភាសាខ្មែរ
                </label>
                <textarea
                  rows="4"
                  defaultValue={translationsKh["about_p"] || "Loading..."}
                  onChange={(e) => setAboutCompanyKh(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <button
                  className="bg-[#314cb2] text-[#ffffff] px-3 py-2 rounded-full my-2"
                  type="submit"
                >
                  Update
                </button>
              </form>
            ) : null}
          </div>

          <div className="bg-[#314bb2] w-full px-10 py-[8vh] md:py-[32vh] clip-path-2">
            <div className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto text-[#eee]">
              <div className="gap-5 pb-4 z-1000">
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium">
                    {translations["vision_title"] || "Loading..."}
                  </h1>

                  {showEditPWelcome ? (
                    <p className="font-['inter'] md:text-[20px]">
                      {translations["vision_detail"] || "Loading..."}
                    </p>
                  ) : null}
                  {showEditWelcome ? (
                    <form
                      onSubmit={handleEditVisionDetailSubmit}
                      className="w-full max-w-xl ml-[60%]"
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-200"
                      >
                        English
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={
                          translations["vision_detail"] || "Loading..."
                        }
                        onChange={(e) => setVisionDetailEn(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-200"
                      >
                        ភាសាខ្មែរ
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={
                          translationsKh["vision_detail"] || "Loading..."
                        }
                        onChange={(e) => setVisionDetailKh(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Khmer"
                        required
                      ></textarea>
                      <button
                        className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
              <div className=" gap-5 pt-4">
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-2">
                    {translations["mission_title"] || "Loading..."}
                  </h1>

                  {showEditPWelcome ? (
                    <p className="font-['inter'] md:text-[20px]">
                      {translations["mission_detail"] || "Loading..."}
                    </p>
                  ) : null}
                  {showEditWelcome ? (
                    <form
                      onSubmit={handleEditMissionSubmit}
                      className="w-full max-w-xl"
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-[16px] font-medium text-gray-200"
                      >
                        English
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={
                          translations["mission_detail"] || "Loading..."
                        }
                        onChange={(e) => setMissionEn(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-200"
                      >
                        ភាសាខ្មែរ
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={
                          translationsKh["mission_detail"] || "Loading..."
                        }
                        onChange={(e) => setMissionKh(e.target.value)}
                        class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <button
                        className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>

              <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-5">
                {translations["core_value"] || "Loading..."}
              </h1>
              <div className="flex justify-center flex-wrap md:flex-nowrap gap-[4vw] max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-5">
                <div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">
                        {translations["integrity_title"] || "Loading..."}
                      </h1>

                      {showEditWelcome ? (
                        <form
                          onSubmit={handleEditIntegrityTitleSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            for="message"
                            class="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["integrity_title"] || "Loading..."
                            }
                            onChange={(e) =>
                              setIntegrityTitleEn(e.target.value)
                            }
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["integrity_title"] || "Loading..."
                            }
                            onChange={(e) =>
                              setIntegrityTitleKh(e.target.value)
                            }
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}

                      <p className="md:text-[20px]">
                        {translations["integrity_detail"] || "Loading..."}
                      </p>

                      {showEditWelcome ? (
                        <form
                          onSubmit={handleEditIntegrityDetailSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            for="message"
                            class="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["integrity_detail"] || "Loading..."
                            }
                            onChange={(e) =>
                              setIntegrityDetailEn(e.target.value)
                            }
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["integrity_detail"] || "Loading..."
                            }
                            onChange={(e) =>
                              setIntegrityDetailKh(e.target.value)
                            }
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">
                        {translations["excellence_title"] || "Loading..."}
                      </h1>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleExTitleSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            for="message"
                            class="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["excellence_title"] || "Loading..."
                            }
                            onChange={(e) => setExTitleEn(e.target.value)}
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["excellence_title"] || "Loading..."
                            }
                            onChange={(e) => setExTitleKh(e.target.value)}
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}

                      <p className="md:text-[20px]">
                        {translations["excellence_detail"] || "Loading..."}
                      </p>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleExDetailSubmit}
                          className="w-full max-w-xl"
                        >
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 float-end"
                            type="submit"
                          >
                            Update
                          </button>
                          <label
                            for="message"
                            class="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["excellence_detail"] || "Loading..."
                            }
                            onChange={(e) => setExDetailEn(e.target.value)}
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["excellence_detail"] ||
                              "Loading..."
                            }
                            onChange={(e) => setExDetailKh(e.target.value)}
                            class="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>

                        </form>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">
                        {translations["cs"] || "Loading..."}
                      </h1>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleCsTitleSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["cs"] || "Loading..."
                            }
                            onChange={(e) => setCsTitleEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["cs"] || "Loading..."
                            }
                            onChange={(e) => setCsTitleKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}

                      <p className="md:text-[20px]">
                        {translations["cs_detail"] || "Loading..."}
                      </p>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleCsDetailSubmit}
                          className="w-full max-w-xl"
                        >
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 float-end"
                            type="submit"
                          >
                            Update
                          </button>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["cs_detail"] || "Loading..."
                            }
                            onChange={(e) => setCsDetailEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["cs_detail"] ||
                              "Loading..."
                            }
                            onChange={(e) => setCsDetailKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>

                        </form>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">
                        {translations["innovation"] || "Loading..."}
                      </h1>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleInnovationTitleSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["innovation"] || "Loading..."
                            }
                            onChange={(e) => setInnovationTitleEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["innovation"] || "Loading..."
                            }
                            onChange={(e) => setInnovationTitleKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}


                      <p className="md:text-[20px]">
                        {translations["innovation_detail"] || "Loading..."}
                      </p>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleInnovationDetailSubmit}
                          className="w-full max-w-xl"
                        >
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 float-end"
                            type="submit"
                          >
                            Update
                          </button>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["innovation_detail"] || "Loading..."
                            }
                            onChange={(e) => setInnovationDetailEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["innovation_detail"] ||
                              "Loading..."
                            }
                            onChange={(e) => setInnovationDetailKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>

                        </form>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">
                        {translations["collaboration"] || "Loading..."}
                      </h1>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleCollaborationTitleSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translations["collaboration"] || "Loading..."
                            }
                            onChange={(e) => setCollaborationTitleEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="1"
                            defaultValue={
                              translationsKh["collaboration"] || "Loading..."
                            }
                            onChange={(e) => setCollaborationTitleKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}

                      <p className="md:text-[20px]">
                        {translations["collaboration_detail"] || "Loading..."}
                      </p>
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleCollaborationDetailSubmit}
                          className="w-full max-w-xl"
                        >
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 float-end"
                            type="submit"
                          >
                            Update
                          </button>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["collaboration_detail"] || "Loading..."
                            }
                            onChange={(e) => setCollaborationDetailEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["collaboration_detail"] ||
                              "Loading..."
                            }
                            onChange={(e) => setCollaborationDetailKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>

                        </form>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-[28vh] md:pb-[25vh] xl:pb-[64vh] z-20">
            <div className="absolute bottom-0 flex w-full justify-center items-center translate-x-[-50%] left-[47%] md:left-[47%] ">
              <div>
                <img
                  src={imgFounder}
                  className="w-[190vh] md:w-[172vh] lg:w-[100vh] xl:w-[172vh]"
                />
              </div>
              <div className="text-[#182760] font-['lexend'] mt-10 md:mt-20">
                <h1 className="text-[16px] md:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal">
                  {translations["founder_name"] || "Loading..."}
                </h1>
                {showEditWelcome ? (
                  <form
                    onSubmit={handleFounderNameSubmit}
                    className="w-full max-w-xl "
                  >
                    <label
                      htmlFor="message"
                      className="block mb-2 text-[16px] font-medium text-black"
                    >
                      English
                    </label>
                    <textarea
                      rows="1"
                      defaultValue={
                        translations["founder_name"] || "Loading..."
                      }
                      onChange={(e) => setFounderNameEn(e.target.value)}
                      className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="English"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      ភាសាខ្មែរ
                    </label>
                    <textarea
                      rows="1"
                      defaultValue={
                        translationsKh["founder_name"] || "Loading..."
                      }
                      onChange={(e) => setFounderNameKh(e.target.value)}
                      className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="English"
                      required
                    ></textarea>
                    <button
                      className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                      type="submit"
                    >
                      Update
                    </button>
                  </form>
                ) : null}

                <p className="text-[16px] md:text-[24px] lg:text-[38px] text-[#233C96] font-normal">
                  {translations["founder_title"] || "Loading..."}
                </p>
                {showEditWelcome ? (
                  <form
                    onSubmit={handleFounderTitleSubmit}
                    className="w-full max-w-xl"
                  >
                    <label
                      htmlFor="message"
                      className="block mb-2 text-[16px] font-medium text-black"
                    >
                      English
                    </label>
                    <textarea
                      rows="1"
                      defaultValue={
                        translations["founder_title"] || "Loading..."
                      }
                      onChange={(e) => setFounderTitleEn(e.target.value)}
                      className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="English"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      ភាសាខ្មែរ
                    </label>
                    <textarea
                      rows="1"
                      defaultValue={
                        translationsKh["founder_title"] || "Loading..."
                      }
                      onChange={(e) => setFounderTitleKh(e.target.value)}
                      className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="English"
                      required
                    ></textarea>
                    <button
                      className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                      type="submit"
                    >
                      Update
                    </button>
                  </form>
                ) : null}


                <br />
                <p className="text-[9px] md:text-[20px]">
                  {translations["education"] || "Loading..."}

                  {showEditWelcome ? (
                    <form
                      onSubmit={handleEducationSubmit}
                      className="w-full max-w-xl"
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-[16px] font-medium text-black"
                      >
                        English
                      </label>
                      <textarea
                        rows="2"
                        defaultValue={
                          translations["education"] || "Loading..."
                        }
                        onChange={(e) => setEducationEn(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        ភាសាខ្មែរ
                      </label>
                      <textarea
                        rows="2"
                        defaultValue={
                          translationsKh["education"] || "Loading..."
                        }
                        onChange={(e) => setEducationKh(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <button
                        className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  ) : null}
                </p>

                <details className="w-30 text-center md:w-44 my-2 cursor-pointer">
                  <summary className="bg-gradient-to-r from-[#C2F6FF] to-[#05A4FE] px-3 py-2 text-[12px] md:text-[17px] text-[#182760] rounded-xl select-none">
                    {translations["btn_ms"] || "Loading..."}
                  </summary>
                  <p className="text-start w-full left-[54%] md:left-[53%] lg:left-[68%] xl:left-[66%] translate-x-[-50%] md:max-w-2xl p-2 shadow-xl bg-[#7978789a] backdrop-blur-[100px] bg-opacity-100 my-3 absolute rounded-2xl text-[#eee] transition delay-1000 duration-2000 z-50">
                    {translations["header"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleHeaderSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["header"] || "Loading..."
                          }
                          onChange={(e) => setHeaderEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["header"] || "Loading..."
                          }
                          onChange={(e) => setHeaderKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                    <br />
                    <br />
                    {translations["body"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleBodySubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="4"
                          defaultValue={
                            translations["body"] || "Loading..."
                          }
                          onChange={(e) => setBodyEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="4"
                          defaultValue={
                            translationsKh["body"] || "Loading..."
                          }
                          onChange={(e) => setBodyKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                    <br />
                    <br />
                    {translations["footer"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleFooterSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["footer"] || "Loading..."
                          }
                          onChange={(e) => setFooterEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translationsKh["footer"] || "Loading..."
                          }
                          onChange={(e) => setFooterKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-[#314bb2] px-5 pt-3 pb-12 md:pt-24 md:pb-32 clip-path-3 z-10">
            <div className="flex justify-center items-center gap-[10vw]">
              <div>
                <div className="flex gap-[2vw] items-center justify-center">
                  <img src={founderIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    {translations["founder_ch"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleFounderChSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["founder_ch"] || "Loading..."
                          }
                          onChange={(e) => setFounderChEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["founder_ch"] || "Loading..."
                          }
                          onChange={(e) => setFounderChKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-[2vw] items-center py-5">
                  <img src={accountingIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    {translations["t_&_a"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTandASubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["t_&_a"] || "Loading..."
                          }
                          onChange={(e) => setTandAEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["t_&_a"] || "Loading..."
                          }
                          onChange={(e) => setTandAKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                </div>
                <div className="flex gap-[2vw] items-center py-5">
                  <img src={partnerIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    {translations["partner"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handlePartnerSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["partner"] || "Loading..."
                          }
                          onChange={(e) => setPartnerEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["partner"] || "Loading..."
                          }
                          onChange={(e) => setPartnerKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2  text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-3 md:my-10">
            <div className="p-5">
              <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] my-5">
                {translations["brc"] || "Loading..."}
              </h1>
              <div>
                <div className="bg-gray-200 w-full max-w-screen-xl mx-auto my-2">
                  <img src={certificateImage} />
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-[.5rem] my-2">
                  <div className="bg-gray-200 w-full max-w-screen-md mx-auto">
                    <img src={vatImage} />
                  </div>
                  <div className="bg-gray-200 w-full max-w-screen-md mx-auto">
                    <img src={ahNhabanImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 py-10">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px]">
            {translations["ourservice"] || "Loading..."}
            {showEditWelcome ? (
              <form
                onSubmit={handleOurServiceSubmit}
                className="w-full max-w-xl mx-auto"
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-[16px] font-medium text-black"
                >
                  English
                </label>
                <textarea
                  rows="1"
                  defaultValue={
                    translations["ourservice"] || "Loading..."
                  }
                  onChange={(e) => setServiceEn(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  ភាសាខ្មែរ
                </label>
                <textarea
                  rows="1"
                  defaultValue={
                    translationsKh["ourservice"] || "Loading..."
                  }
                  onChange={(e) => setServiceKh(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <button
                  className="bg-[#314cb2] text-[#ffffff] px-3 py-2 rounded-full my-2 text-[16px]"
                  type="submit"
                >
                  Update
                </button>
              </form>
            ) : null}
          </h1>
          <p className="text-center text-[#405194] font-['inter'] text-[16px] mb-14">
            {translations["ourservice_detail"] || "Loading..."}
            {showEditWelcome ? (
              <form
                onSubmit={handleOurServiceDetailSubmit}
                className="w-full max-w-xl mx-auto"
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-[16px] font-medium text-black"
                >
                  English
                </label>
                <textarea
                  rows="2"
                  defaultValue={
                    translations["ourservice_detail"] || "Loading..."
                  }
                  onChange={(e) => setOurServiceDetailEn(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  ភាសាខ្មែរ
                </label>
                <textarea
                  rows="1"
                  defaultValue={
                    translationsKh["ourservice_detail"] || "Loading..."
                  }
                  onChange={(e) => setOurServiceDetailKh(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <button
                  className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                  type="submit"
                >
                  Update
                </button>
              </form>
            ) : null}
          </p>
          <div className="w-full max-w-screen-lg mx-auto pt-10 relative">
            <div>
              <div className="p-4 lg:p-6 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] md:left-[25%] lg:left-[15%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[17.4%] md:left-[75%] md:top-[3%] lg:left-[49%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[33.2%] md:left-[25%] md:top-[36%] lg:left-[84%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconTrande} className="rotate-[-134deg]" width="64" />
              </div>

              <div className="p-4 lg:p-6 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] md:left-[75%] md:top-[36%] lg:left-[15%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[67.8%] md:left-[75%] md:top-[72%] lg:left-[49%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[85.6%] md:left-[25%] md:top-[72%] lg:left-[84%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconTrande} className="rotate-[-134deg]" width="64" />
              </div>
            </div>
            {/* background */}
            <div>
              <div className="p-4 lg:p-6 bg-gradient-to-r from-[#7c29f1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[2%] md:left-[25%] md:top-[4%] lg:left-[15%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[17.7%] md:left-[75%] md:top-[4%] lg:left-[49%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[33.5%] md:left-[25%] md:top-[36.9%] lg:left-[84%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                <img src={iconTrande} className="rotate-[-134deg]" width="64" />
              </div>

              <div className="p-4 lg:p-6 bg-gradient-to-r from-[#7c29f1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[50.3%] md:left-[75%] md:top-[36.9%] lg:left-[15%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[68.1%] md:left-[75%] md:top-[73%] lg:left-[49%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[85.9%] md:left-[25%] md:top-[73%] lg:left-[84%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                <img src={iconTrande} className="rotate-[-134deg]" width="64" />
              </div>
            </div>
            {/* content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-[3vw] gap-y-[9vh]">
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                  <li className="py-3 text-[17px] font-['inter']">
                    <b>{translations["tss"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTssSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tss"] || "Loading..."
                          }
                          onChange={(e) => setTssEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tss"] || "Loading..."
                          }
                          onChange={(e) => setTssKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["tss_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTssContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tss_content_1"] || "Loading..."
                          }
                          onChange={(e) => setTssContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tss_content_1"] || "Loading..."
                          }
                          onChange={(e) => setTssContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["tss_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTssContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tss_content_2"] || "Loading..."
                          }
                          onChange={(e) => setTssContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tss_content_2"] || "Loading..."
                          }
                          onChange={(e) => setTssContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                  <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    <b>{translations["ass"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleAssSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["ass"] || "Loading..."
                          }
                          onChange={(e) => setAssEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["ass"] || "Loading..."
                          }
                          onChange={(e) => setAssKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    {translations["ass_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleAssContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["ass_content_1"] || "Loading..."
                          }
                          onChange={(e) => setAssContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["ass_content_1"] || "Loading..."
                          }
                          onChange={(e) => setAssContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    {translations["ass_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleAssContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["ass_content_2"] || "Loading..."
                          }
                          onChange={(e) => setAssContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["ass_content_2"] || "Loading..."
                          }
                          onChange={(e) => setAssContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                  <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    <b>{translations["tad"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTadSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tad"] || "Loading..."
                          }
                          onChange={(e) => setTadEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tad"] || "Loading..."
                          }
                          onChange={(e) => setTadKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    {translations["tad_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTadContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tad_content_1"] || "Loading..."
                          }
                          onChange={(e) => setTadContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tad_content_1"] || "Loading..."
                          }
                          onChange={(e) => setTadContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-3">
                    {translations["tad_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleTadContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["tad_content_2"] || "Loading..."
                          }
                          onChange={(e) => setTadContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["tad_content_2"] || "Loading..."
                          }
                          onChange={(e) => setTadContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                  <li className="py-3 text-[17px] font-['inter']">
                    <b>{translations["bsr"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleBsrSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["bsr"] || "Loading..."
                          }
                          onChange={(e) => setBsrEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["bsr"] || "Loading..."
                          }
                          onChange={(e) => setBsrKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["bsr_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleBsrContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["bsr_content_1"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["bsr_content_1"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["bsr_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleBsrContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["bsr_content_2"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["bsr_content_2"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["bsr_content_3"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleBsrContentThreeSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["bsr_content_3"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentThreeEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["bsr_content_3"] || "Loading..."
                          }
                          onChange={(e) => setBsrContentThreeKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                  <li className="py-3 text-[17px] font-['inter']">
                    <b>{translations["cu"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCuSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cu"] || "Loading..."
                          }
                          onChange={(e) => setCuEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cu"] || "Loading..."
                          }
                          onChange={(e) => setCuKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["cu_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCuContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cu_content_1"] || "Loading..."
                          }
                          onChange={(e) => setCuContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cu_content_1"] || "Loading..."
                          }
                          onChange={(e) => setCuContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["cu_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCuContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cu_content_2"] || "Loading..."
                          }
                          onChange={(e) => setCuContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cu_content_2"] || "Loading..."
                          }
                          onChange={(e) => setCuContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter']">
                    {translations["cu_content_3"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCuContentThreeSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cu_content_3"] || "Loading..."
                          }
                          onChange={(e) => setCuContentThreeEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cu_content_3"] || "Loading..."
                          }
                          onChange={(e) => setCuContentThreeKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                  <li className="py-3 text-[17px] font-['inter'] px-2">
                    <b>{translations["cc"] || "Loading..."}</b>
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCcSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cc"] || "Loading..."
                          }
                          onChange={(e) => setCcEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cc"] || "Loading..."
                          }
                          onChange={(e) => setCcKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-2">
                    {" "}
                    {translations["cc_content_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCcContentOneSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cc_content_1"] || "Loading..."
                          }
                          onChange={(e) => setCcContentOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cc_content_1"] || "Loading..."
                          }
                          onChange={(e) => setCcContentOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-2">
                    {translations["cc_content_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCcContentTwoSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["cc_content_2"] || "Loading..."
                          }
                          onChange={(e) => setCcContentTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cc_content_2"] || "Loading..."
                          }
                          onChange={(e) => setCcContentTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                  <li className="py-3 text-[17px] font-['inter'] px-2 text-wrap">
                    {translations["cc_content_3"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleCcContentThreeSubmit}
                        className="w-full max-w-xl"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["cc_content_3"] || "Loading..."
                          }
                          onChange={(e) => setCcContentThreeEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["cc_content_3"] || "Loading..."
                          }
                          onChange={(e) => setCcContentThreeKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] py-10 md:pt-12 xl:pt-9">
            {translations["why_us"] || "Loading..."}
            {showEditWelcome ? (
              <form
                onSubmit={handleWhyUsSubmit}
                className="w-full max-w-xl mx-auto"
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-[16px] font-medium text-gray-200"
                >
                  English
                </label>
                <textarea
                  rows="1"
                  defaultValue={
                    translations["why_us"] || "Loading..."
                  }
                  onChange={(e) => setWhyUsEn(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-200"
                >
                  ភាសាខ្មែរ
                </label>
                <textarea
                  rows="1"
                  defaultValue={
                    translationsKh["why_us"] || "Loading..."
                  }
                  onChange={(e) => setWhyUsKh(e.target.value)}
                  className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="English"
                  required
                ></textarea>
                <button
                  className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                  type="submit"
                >
                  Update
                </button>
              </form>
            ) : null}
          </h1>

          <div className="bg-[#314bb2] clip-path-4">
            <div className="flex items-center justify-center py-[10vh] md:pt-[20vh] md:pb-12 xl:pt-[26vh] xl:pb-16">
              <div className="w-full max-w-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] lg:gap-[3vw]">
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50 hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      1
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_1"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsOneSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_1"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsOneEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_1"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsOneKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      2
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_2"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsTwoSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_2"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsTwoEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_2"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsTwoKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      3
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_3"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsThreeSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_3"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsThreeEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_3"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsThreeKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      4
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_4"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsFourSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_4"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsFourEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_4"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsFourKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      5
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_5"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsFiveSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_5"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsFiveEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_5"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsFiveKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      6
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_6"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsSixSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_6"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsSixEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_6"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsSixKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      7
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {translations["why_us_7"] || "Loading..."}
                      {showEditWelcome ? (
                        <form
                          onSubmit={handleWhyUsSevenSubmit}
                          className="w-full max-w-xl"
                        >
                          <label
                            htmlFor="message"
                            className="block mb-2 text-[16px] font-medium text-gray-200"
                          >
                            English
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translations["why_us_7"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsSevenEn(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-200"
                          >
                            ភាសាខ្មែរ
                          </label>
                          <textarea
                            rows="3"
                            defaultValue={
                              translationsKh["why_us_7"] || "Loading..."
                            }
                            onChange={(e) => setWhyUsSevenKh(e.target.value)}
                            className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="English"
                            required
                          ></textarea>
                          <button
                            className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2"
                            type="submit"
                          >
                            Update
                          </button>
                        </form>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative pt-0 md:pt-24">
          <div className="w-full max-w-sm md:max-w-screen-xl mx-auto">
            <div className="h-full md:pb-[36vh] xl:pb-[56vh] bg-[#ffffff]">
              <div>
                <h1 className="text-[45px] text-[#182760] text-center font-['koulen'] font-medium pt-12">
                  {translations["ourClient"] || "Loading..."}
                  {showEditWelcome ? (
                    <form
                      onSubmit={handleOurClientSubmit}
                      className="w-full max-w-xl mx-auto"
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-[16px] font-medium text-gray-200"
                      >
                        English
                      </label>
                      <textarea
                        rows="1"
                        defaultValue={
                          translations["ourClient"] || "Loading..."
                        }
                        onChange={(e) => setOurClientEn(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-200"
                      >
                        ភាសាខ្មែរ
                      </label>
                      <textarea
                        rows="1"
                        defaultValue={
                          translationsKh["ourClient"] || "Loading..."
                        }
                        onChange={(e) => setOurClientKh(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <button
                        className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  ) : null}
                </h1>
                <p className="text-center text-[#182760] pb-0 md:pb-5">
                  {translations["client_details"] || "Loading..."}
                  {showEditWelcome ? (
                    <form
                      onSubmit={handleOurClientDetailSubmit}
                      className="w-full max-w-xl mx-auto"
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-[16px] font-medium text-gray-200"
                      >
                        English
                      </label>
                      <textarea
                        rows="1"
                        defaultValue={
                          translations["client_details"] || "Loading..."
                        }
                        onChange={(e) => setOurClientDetailEn(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-200"
                      >
                        ភាសាខ្មែរ
                      </label>
                      <textarea
                        rows="1"
                        defaultValue={
                          translationsKh["client_details"] || "Loading..."
                        }
                        onChange={(e) => setOurClientDetailKh(e.target.value)}
                        className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="English"
                        required
                      ></textarea>
                      <button
                        className="text-[#ffffff] bg-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  ) : null}
                </p>
              </div>
              <div className="flex justify-center gap-[4vw] my-10">
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-110"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-125"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-125"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-110"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="md:absolute z-10 md:translate-x-[-50%] md:left-[50%] md:top-[43%] lg:top-[37%] 2xl:top-[40%] flex flex-wrap gap-[1vh] lg:gap-[2vh]">
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-[1vh] lg:gap-[2vh]">
              <div className="flex justify-center">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full" />
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#182760] order-first md:order-none">
                  <h1 className="lg:text-[35px] text-[#eee]  font-['koulen'] font-medium">
                    {translations["items_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemOneSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["items_1"] || "Loading..."
                          }
                          onChange={(e) => setItemOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["items_1"] || "Loading..."
                          }
                          onChange={(e) => setItemOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                  <p className="text-[#eee] pb-5">
                    {translations["items_detail_1"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemDetailOneSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["items_detail_1"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailOneEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translationsKh["items_detail_1"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailOneKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </p>
                </div>
              </div>

              <div className="flex justify-center order-first md:order-none">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full" />
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#CCD8E8]">
                  <h1 className="lg:text-[35px] text-[#182760]  font-['koulen'] font-medium">
                    {translations["items_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemTwoSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["items_2"] || "Loading..."
                          }
                          onChange={(e) => setItemTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["items_2"] || "Loading..."
                          }
                          onChange={(e) => setItemTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                  <p className=" text-[#182760] pb-5">
                    {translations["items_detail_2"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemDetailTwoSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["items_detail_2"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailTwoEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translationsKh["items_detail_2"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailTwoKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-[1vh] flex-wrap md:flex-nowrap lg:gap-[2vh]">
              <div className="flex justify-center">
                <div className=" w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#CCD8E8]">
                  <h1 className="lg:text-[35px] text-[#182760]  font-['koulen'] font-medium">
                    {translations["items_3"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemThreeSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["items_3"] || "Loading..."
                          }
                          onChange={(e) => setItemThreeEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translationsKh["items_3"] || "Loading..."
                          }
                          onChange={(e) => setItemThreeKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                  <p className=" text-[#182760] pb-5">
                    {translations["items_detail_3"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemDetailThreeSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-black"
                        >
                          English
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translations["items_detail_3"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailThreeEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="2"
                          defaultValue={
                            translationsKh["items_detail_3"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailThreeKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </p>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full" />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#182760]">
                  <h1 className="lg:text-[35px] text-[#eee]  font-['koulen'] font-medium">
                    {translations["items_4"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemFourSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["items_4"] || "Loading..."
                          }
                          onChange={(e) => setItemFourEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["items_4"] || "Loading..."
                          }
                          onChange={(e) => setItemFourKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </h1>
                  <p className="text-[#eee] pb-5">
                    {translations["items_detail_4"] || "Loading..."}
                    {showEditWelcome ? (
                      <form
                        onSubmit={handleItemDetailFourSubmit}
                        className="w-full max-w-xl mx-auto"
                      >
                        <label
                          htmlFor="message"
                          className="block mb-2 text-[16px] font-medium text-gray-200"
                        >
                          English
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translations["items_detail_4"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailFourEn(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-200"
                        >
                          ភាសាខ្មែរ
                        </label>
                        <textarea
                          rows="1"
                          defaultValue={
                            translationsKh["items_detail_4"] || "Loading..."
                          }
                          onChange={(e) => setItemDetailFourKh(e.target.value)}
                          className="block p-2.5 w-full text-[16px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="English"
                          required
                        ></textarea>
                        <button
                          className="bg-[#ffffff] text-[#314cb2] px-3 py-2 rounded-full my-2 text-[16px]"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
                    ) : null}
                  </p>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#314bb2] md:pb-[30vh] xl:pb-[50vh] clip-path-5"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeAdmin;
