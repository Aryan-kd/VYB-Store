const colors: any = {
  text_default: "rgba(0, 0, 0, 1)",
  color_text_default_rgb: "0, 0, 0",
  color_alert_default: "rgba(250, 181, 21, 1)",
  color_alert_default_rgb: "250, 181, 21",
  color_primary_default: "rgba(0, 60, 60, 1)",
  color_primary_default_rgb: "0, 60, 60",
  color_success_default: "rgba(23, 219, 78, 1)",
  color_success_default_rgb: "23, 219, 78",
  color_surface_default: "rgba(255, 255, 255, 1)",
  color_surface_default_rgb: "255, 255, 255",
  color_background_default: "rgba(248, 249, 251, 1)",
  color_background_default_rgb: "248, 249, 251",
  color_destructive_default: "rgba(221, 79, 79, 1)",
  color_destructive_default_rgb: "221, 79, 79",
  color_primary_contrast_default: "rgba(248, 249, 251, 1)",
  color_primary_contrast_default_rgb: "248, 249, 251",
  color_bTJsb_default: "rgba(2, 8, 38, 1)",
  color_bTJsb_default_rgb: "2, 8, 38",
  color_bTJsc_default: "rgba(113, 96, 64, 1)",
  color_bTJsc_default_rgb: "113, 96, 64",
  color_bTJsd_default: "rgba(2, 8, 38, 1)",
  color_bTJsd_default_rgb: "2, 8, 38",
  color_bTJsh_default: "rgba(140, 120, 81, 1)",
  color_bTJsh_default_rgb: "140, 120, 81",
  color_bTJsi_default: "rgba(1, 0, 22, 1)",
  color_bTJsi_default_rgb: "1, 0, 22",
  color_bTJsj_default: "rgba(255, 255, 254, 1)",
  color_bTJsj_default_rgb: "255, 255, 254",
  color_bTJsn_default: "rgba(113, 96, 64, 1)",
  color_bTJsn_default_rgb: "113, 96, 64",
  color_bTJso_default: "rgba(35, 41, 70, 1)",
  color_bTJso_default_rgb: "35, 41, 70",
  color_bTJsp_default: "rgba(255, 255, 255, 1)",
  color_bTJsp_default_rgb: "255, 255, 255",
  color_bTJst_default: "rgba(2, 8, 38, 1)",
  color_bTJst_default_rgb: "2, 8, 38",
  color_bTJsu_default: "rgba(242, 80, 66, 1)",
  color_bTJsu_default_rgb: "242, 80, 66",
  color_bTJsz_default: "rgba(195, 207, 226, 1)",
  color_bTJsz_default_rgb: "195, 207, 226",
  color_bTJtv_default: "rgba(245, 247, 250, 1)",
  color_bTJtv_default_rgb: "245, 247, 250",
  color_bTJtw_default: "rgba(96, 62, 125, 1)",
  color_bTJtw_default_rgb: "96, 62, 125",
  color_bTJuB_default: "rgba(155, 153, 153, 1)",
  color_bTJuB_default_rgb: "155, 153, 153",
  color_bTJxa_default: "rgba(155, 153, 153, 1)",
  color_bTJxa_default_rgb: "155, 153, 153",
  color_bTKaX_default: "rgba(0, 0, 0, 1)",
  color_bTKaX_default_rgb: "0, 0, 0",
  color_bTKaY_default: "rgba(217, 217, 217, 1)",
  color_bTKaY_default_rgb: "217, 217, 217",
  color_bTKaZ_default: "rgba(248, 249, 251, 1)",
  color_bTKaZ_default_rgb: "248, 249, 251",
  color_bTKbH_default: "rgba(214, 214, 214, 0.4)",
  color_bTKbH_default_rgb: "214, 214, 214",
  color_bTKgX_default: "rgba(74, 80, 142, 1)",
  color_bTKgX_default_rgb: "74, 80, 142",
  color_bTKih_default: "rgba(255, 255, 255, 1)",
  color_bTKih_default_rgb: "255, 255, 255",
  color_bTKii_default: "rgba(64, 64, 64, 1)",
  color_bTKii_default_rgb: "64, 64, 64",
  color_bTKij_default: "rgba(255, 255, 255, 1)",
  color_bTKij_default_rgb: "255, 255, 255",
  color_bTNrc0_default: "rgba(168, 168, 168, 1)",
  color_bTNrc0_default_rgb: "168, 168, 168",
  color_bTNrd0_default: "rgba(229, 240, 241, 1)",
  color_bTNrd0_default_rgb: "229, 240, 241",
  color_bTOQR0_default: "rgba(229, 240, 241, 1)",
  color_bTOQR0_default_rgb: "229, 240, 241",
  color_bTWEb0_default: "rgba(0, 220, 130, 1)",
  color_bTWEb0_default_rgb: "0, 220, 130",
  color_bTWxb0_default: "rgba(0, 0, 238, 1)",
  color_bTWxb0_default_rgb: "0, 0, 238",
};

const rootColor = (orig: string) => {
  let colorvar = colors[orig];
  return rgb2hex(colorvar);
};

const rgb2hex = (orig: string) => {
  var a,
    isPercent,
    rgb: any = orig
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 0o1;
  }
  hex = hex + a;

  return hex;
};

export default rootColor;
