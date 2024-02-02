import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellCaptionBoldIcon = (
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
      <path d='M5.5 3.5a.73.73 0 0 1 .54.21q.21.212.21.54v.422q1.313.234 2.133 1.195.843.96.867 2.32v.774a4.75 4.75 0 0 0 1.031 2.93l.352.445a.61.61 0 0 1 .07.586.6.6 0 0 1-.515.328H.813a.6.6 0 0 1-.516-.328.54.54 0 0 1 .07-.586l.352-.445A4.75 4.75 0 0 0 1.75 8.96v-.774q.024-1.36.867-2.32.82-.96 2.133-1.195V4.25a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21m0 2.25h-.187q-1.032.024-1.735.703-.68.704-.703 1.734v.774a5.9 5.9 0 0 1-.937 3.164h7.125a5.65 5.65 0 0 1-.938-3.164v-.774q-.024-1.03-.703-1.734-.703-.68-1.734-.703zM7 14q0 .61-.445 1.055A1.44 1.44 0 0 1 5.5 15.5q-.61 0-1.055-.445A1.44 1.44 0 0 1 4 14h3' />
    </g>
    <defs>
      <clipPath id='ef02379c31ace423__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionBoldIcon);
export default ForwardRef;
