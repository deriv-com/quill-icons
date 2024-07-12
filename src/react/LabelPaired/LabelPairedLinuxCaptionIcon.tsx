import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.406 6.406c-.023-.023-.07-.023-.07-.047 0 0 0-.023.023-.023.024-.024.07-.024.118 0 .023.023.07.047.07.07s-.047.024-.07.024-.047-.024-.07-.024m-.515.024c-.024.023-.047 0-.047-.024-.024-.023.047-.047.07-.07.047-.024.094-.024.117 0 .024 0 .024.023.024.023 0 .024-.047.024-.094.047-.024 0-.024.024-.07.024m5.203 6.539c.258.304.351.515.351.703s-.14.328-.328.422c-.351.21-.867.375-1.195.75-.328.398-.727.633-1.125.656-.399.047-.75-.14-.938-.54l-.07-.14c-.492.024-.937-.14-1.289-.117-.516.047-.844.164-1.125.164a.83.83 0 0 1-.61.469c-.374.094-.843 0-1.312-.234-.445-.235-.984-.211-1.383-.305-.21-.024-.398-.117-.468-.281-.094-.164-.07-.399.046-.75.024-.118 0-.282-.023-.47-.023-.093-.023-.187-.023-.28 0-.118 0-.211.07-.305a.65.65 0 0 1 .422-.328c.164-.07.304-.094.398-.188.117-.14.235-.351.399-.492-.07-.398 0-.82.14-1.242.281-.89.914-1.734 1.36-2.274.375-.539.492-.96.515-1.5.047-.75-.562-3.187 1.828-3.187 1.899.023 1.805 2.016 1.782 3.094 0 .703.375 1.172.797 1.687.351.422.82 1.031 1.078 1.735.21.586.304 1.218.093 1.851.024.024.07.024.094.047.024.024.07.047.094.07.14.141.21.329.234.54.047.187.094.351.188.445M5.477 5.563a1 1 0 0 0-.07.515c.093 0 .21.047.304.094-.047-.281.117-.563.281-.54.211 0 .328.352.211.634-.023.046-.07.093-.094.117.164.047.258.094.305.117a.93.93 0 0 0 .094-.96c-.235-.493-.797-.493-1.031.022m-.938-.282c-.445 0-.562.89-.21 1.219.187-.117.163-.094.14-.117-.188-.164-.164-.656.047-.656.14-.024.257.234.21.445.094-.047.165-.07.258-.094.024-.469-.21-.797-.445-.797m-.328 1.43c-.094.07-.14.164-.094.281.024.117.14.258.328.375.188.094.282.258.47.352.07.023.14.023.233.047.422.023.633-.282.891-.352.281-.094.469-.258.54-.422.07-.21-.048-.351-.259-.445-.258-.094-.375-.117-.515-.211-.235-.14-.446-.211-.61-.211-.328 0-.539.234-.656.328 0 .024-.187.14-.328.258m.07 7.828c.047-.492-.726-1.148-.96-1.617l-.446-.844c-.164-.21-.328-.328-.516-.375-.187-.023-.304.047-.421.164-.118.117-.211.305-.329.422-.187.164-.234.164-.468.234a.58.58 0 0 0-.352.282c-.047.117-.047.28-.023.468.046.165.07.375.023.54v.023c-.117.305-.117.492-.07.61.187.35 1.101.14 1.804.515.727.375 1.711.398 1.758-.422m-.023-.61c.867.61 1.922.376 2.672-.163.07-.258.14-.493.164-.68.023-.352.047-.68.093-.938.07-.304.235-.539.516-.632.047-.493.422-.493.89-.305.446.21.61.375.54.61h.094c.117-.4-.329-.657-.727-.821a1.6 1.6 0 0 0 0-.82c-.14-.61-.54-1.125-.82-1.383-.07 0-.047.047.047.14.28.258.867 1.149.562 1.993-.094-.024-.187-.024-.258-.024-.14-.68-.422-1.242-.562-1.523-.258-.492-.68-1.524-.867-2.25a.93.93 0 0 1-.516.351c-.117.047-.234.141-.375.211-.328.188-.703.211-1.008-.023-.094-.07-.187-.164-.281-.234a.7.7 0 0 1-.14-.094c-.048.89-.657 1.992-.938 2.648a4.2 4.2 0 0 0-.328 1.43c-.493-.68-.118-1.547.07-1.922.234-.422.258-.54.21-.492-.21.328-.515.844-.632 1.383-.07.28-.094.562 0 .82.07.258.258.516.563.703 0 0 .586.328.914.774.164.234.21.421.164.585-.047.141-.211.188-.399.188.117.14.258.305.352.469m6.023-.257c.024-.14-.07-.305-.304-.586-.235-.258-.188-.774-.422-.984-.14-.141-.305-.118-.516-.118-.187.211-.61.47-.914.399-.258-.07-.422-.399-.422-.703-.023 0-.023 0-.023.023-.164.07-.258.235-.328.492-.07.235-.07.54-.094.89-.024.282-.14.634-.235.962-.093.305-.14.586-.023.844.164.351.445.492.773.468.352-.046.727-.234 1.032-.609.515-.633 1.453-.703 1.476-1.078m-5.976-6.68c-.094-.07-.07-.14-.047-.14.07 0 .07.07.094.117.046.023.117.093.187.14.14.118.352.235.586.235s.54-.14.703-.235c.094-.046.211-.164.328-.234.07-.047.07-.117.14-.117s.024.07-.07.164c-.093.07-.234.164-.351.234-.21.117-.469.258-.75.258-.258 0-.492-.14-.633-.258-.07-.047-.14-.117-.187-.164' />
    </g>
    <defs>
      <clipPath id='6a7d462f69baeb1cb3a31d9187c19bb2__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxCaptionIcon);
export default ForwardRef;
