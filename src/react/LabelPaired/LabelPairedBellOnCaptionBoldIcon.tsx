import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnCaptionBoldIcon = (
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
      <path d='M7.5 3.5a.73.73 0 0 1 .54.21q.21.212.21.54v.422q1.313.234 2.133 1.195.843.96.867 2.32v.774a4.75 4.75 0 0 0 1.031 2.93l.352.445a.61.61 0 0 1 .07.586.6.6 0 0 1-.515.328H2.813a.6.6 0 0 1-.516-.328.61.61 0 0 1 .07-.586l.352-.445A4.75 4.75 0 0 0 3.75 8.96v-.774q.024-1.36.867-2.32.82-.96 2.133-1.195V4.25a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21m0 2.25h-.187q-1.032.024-1.735.703-.68.704-.703 1.734v.774a5.65 5.65 0 0 1-.937 3.164h7.124a5.9 5.9 0 0 1-.937-3.164v-.774q-.024-1.03-.703-1.734-.703-.68-1.735-.703zM9 14q0 .61-.445 1.055A1.44 1.44 0 0 1 7.5 15.5q-.61 0-1.055-.445A1.44 1.44 0 0 1 6 14h3M0 8.188q.047-.516.563-.563h1.875q.514.047.562.563-.047.514-.562.562H.562Q.048 8.703 0 8.188m12.563-.563h1.874q.516.047.563.563-.047.514-.562.562h-1.876q-.514-.047-.562-.562.047-.516.563-.563m1.453-3.633q.188.492-.258.774l-1.5.75q-.492.188-.75-.258-.187-.492.234-.75l1.5-.75q.492-.187.774.234m-12.774.774q-.422-.282-.234-.774.258-.422.75-.234l1.5.75q.422.258.258.75-.282.422-.774.258z' />
    </g>
    <defs>
      <clipPath id='181643f148f265e9__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnCaptionBoldIcon);
export default ForwardRef;
