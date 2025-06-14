import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.602 7.414c.093.211.023.422-.141.586l-1.008.914c.024.188.024.399.024.586 0 .21 0 .422-.024.61l1.008.913c.164.141.234.375.14.586a5 5 0 0 1-.351.797l-.117.188a6 6 0 0 1-.516.726c-.14.188-.375.235-.586.164l-1.289-.398c-.328.234-.68.422-1.031.586l-.305 1.336a.56.56 0 0 1-.422.422 7 7 0 0 1-1.992 0 .56.56 0 0 1-.422-.422l-.304-1.336a5.6 5.6 0 0 1-1.032-.586l-1.289.398a.54.54 0 0 1-.586-.14 9 9 0 0 1-.515-.75l-.117-.188a5 5 0 0 1-.352-.797c-.094-.21-.023-.421.14-.586l1.008-.914C1.5 9.922 1.5 9.711 1.5 9.5c0-.187 0-.398.023-.586L.516 8C.352 7.836.28 7.625.375 7.414c.094-.281.21-.539.352-.797l.117-.187c.164-.258.328-.516.515-.75a.54.54 0 0 1 .586-.14l1.29.397c.328-.234.68-.445 1.03-.585l.305-1.336a.56.56 0 0 1 .422-.422C5.32 3.547 5.648 3.5 6 3.5c.328 0 .656.047.984.094.211.023.375.21.422.422l.305 1.336c.375.14.703.351 1.031.585l1.29-.398a.54.54 0 0 1 .585.14c.188.235.352.493.516.75l.117.188c.14.258.258.516.375.797zM6 11.375c.656 0 1.266-.352 1.617-.937a1.91 1.91 0 0 0 0-1.876C7.266 8 6.657 7.626 6 7.626c-.68 0-1.29.375-1.64.938a1.91 1.91 0 0 0 0 1.874c.35.586.96.938 1.64.938' />
    </g>
    <defs>
      <clipPath id='5d5201b992e9021fac6d6a63bf7cc9d4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearCaptionFillIcon);
export default ForwardRef;
