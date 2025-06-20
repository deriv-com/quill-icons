import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 14.797a3.76 3.76 0 0 1 3.117-3.727.346.346 0 0 1 .375.188c.352.68.68 1.383 1.031 2.062.118-.468.235-.937.375-1.383-.164-.257-.304-.492-.445-.726-.14-.258.024-.586.328-.586h.914c.305 0 .47.328.328.586-.14.234-.28.469-.445.726.14.446.258.915.375 1.383.352-.68.68-1.383 1.031-2.062.07-.14.211-.211.375-.188.094 0 .164.024.258.047-.094.328-.117.68-.117 1.008 0 .21 0 .398.023.586-.28.562-.562 1.125-.843 1.664h1.476c.281.445.656.844 1.078 1.125H.704A.69.69 0 0 1 0 14.797m1.148-.422h2.649c-.352-.68-.68-1.36-1.031-2.04a2.68 2.68 0 0 0-1.618 2.04M2.25 6.5c0-1.055.563-2.062 1.5-2.578a2.99 2.99 0 0 1 3 0A3 3 0 0 1 8.25 6.5a3.03 3.03 0 0 1-1.5 2.602c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.25 6.5m1.36-.937a1.91 1.91 0 0 0 0 1.875c.35.585.96.937 1.64.937a1.86 1.86 0 0 0 1.617-.937 1.91 1.91 0 0 0 0-1.875 1.91 1.91 0 0 0-1.617-.938c-.68 0-1.29.375-1.64.938m4.64 6.562c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m2.063-.633a.86.86 0 0 0 .492.727c.21.117.468.187.68.234 0 .024.023.024.046.024.235.07.422.117.54.187.093.07.117.094.117.14 0 .048-.024.094-.024.094l-.094.094c-.117.047-.28.07-.445.07-.21 0-.422-.07-.703-.164-.047 0-.094-.023-.14-.023-.188-.07-.4.047-.47.234-.046.211.047.422.258.47.024.023.07.023.117.046.165.047.352.117.563.14v.282c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-.258q.21-.035.422-.14c.281-.165.515-.446.515-.868-.023-.375-.257-.61-.492-.75-.21-.14-.492-.21-.703-.281h-.023c-.235-.07-.422-.117-.563-.187-.094-.07-.094-.094-.094-.118v-.07c.024-.023.047-.047.118-.094.117-.047.28-.094.422-.094.21 0 .398.047.632.094.188.07.399-.07.446-.258.047-.21-.07-.421-.282-.468a13 13 0 0 0-.398-.07v-.235a.385.385 0 0 0-.375-.375.37.37 0 0 0-.375.375v.234a1.1 1.1 0 0 0-.422.141c-.281.14-.539.422-.515.867' />
    </g>
    <defs>
      <clipPath id='e4767d90fb8505deb7f73d9332109738__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarCaptionBoldIcon);
export default ForwardRef;
