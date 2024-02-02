import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappCaptionIcon = (
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
      <path d='M9.18 5.773q.75.75 1.148 1.688.422.938.422 1.992-.024 1.454-.727 2.625a5.3 5.3 0 0 1-1.898 1.875q-1.171.68-2.625.703-1.336 0-2.484-.633L.25 14.75l.727-2.695a5.2 5.2 0 0 1-.68-2.602Q.32 8 1 6.828a5.4 5.4 0 0 1 1.875-1.875q1.172-.68 2.625-.703 2.132.024 3.68 1.523M5.5 13.79q1.828-.046 3.07-1.266 1.242-1.242 1.313-3.07-.047-1.78-1.336-3.047Q7.28 5.141 5.5 5.141q-1.828.023-3.047 1.265-1.242 1.219-1.289 3.047a4.43 4.43 0 0 0 .68 2.297l.093.164-.445 1.594 1.64-.422.165.094q1.008.585 2.203.61m2.367-3.234a.2.2 0 0 1 .07.023q.141.047.188.117.07.118-.094.633-.093.235-.375.399-.28.164-.492.21a2.1 2.1 0 0 1-.633 0q-.327-.07-.937-.328-.915-.445-1.477-1.078-.586-.633-.703-.844-.024-.022-.023-.046h-.024a6 6 0 0 1-.281-.47 2.05 2.05 0 0 1-.234-.866q.023-.446.164-.703.14-.258.257-.352.024-.024.024-.047.21-.165.351-.14h.282q.117-.07.257.21.048.118.141.305.094.234.164.422.07.21.094.234a.25.25 0 0 1 .023.235q-.187.329-.304.422-.165.14-.07.28.351.634.773.962t.984.586q.188.117.281-.024.071-.07.211-.234a7 7 0 0 1 .211-.281q.117-.165.282-.047.117.047.445.187.328.165.445.235' />
    </g>
    <defs>
      <clipPath id='beae4d5698ca1acde9eff204563dccec__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappCaptionIcon);
export default ForwardRef;
