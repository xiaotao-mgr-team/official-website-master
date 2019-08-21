// 时间格式化
export function dateFormate(d, pattern) {
  if (!d || d == "") return "";
  if (typeof (d) != 'object') {
      d = new Date(d);
  }
  pattern = pattern || "yyyy-mm-dd HH:MM";
  let str = "";
  str = pattern.replace("yyyy", d.getFullYear());
  str = str.replace("mm", d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1);
  str = str.replace("dd", d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
  str = str.replace("HH", d.getHours() < 10 ? '0' + d.getHours() : d.getHours());
  str = str.replace("MM", d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
  str = str.replace("ss", d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
  return str;
}

export function dateHandleYM (d) {
  if (!d || d == "") return "";
  if (typeof (d) != 'object') {
      d = new Date(d);
  }
  let yy = d.getFullYear();
  let mm = d.getMonth()+1 < 10 ?  '0' + (d.getMonth()+1) : d.getMonth()+1;
  return `${yy}-${mm}`;
}

export function dateHandleD (d) {
  if (!d || d == "") return "";
  if (typeof (d) != 'object') {
      d = new Date(d);
  }
  return d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
}
