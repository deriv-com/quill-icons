import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsCaptionBoldIcon = (
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
      <path d='M11.86 13.79q-.352.375-.774.07l-3.774-3.141.891-.727 3.586 3.024q.376.351.07.773M2.624 4.624q-.843.024-1.29.75-.42.75 0 1.5.447.726 1.29.75.844-.024 1.29-.75.42-.75 0-1.5-.446-.726-1.29-.75m0-1.125q1.125.024 1.852.773.75.727.773 1.852 0 .633-.281 1.172L6.75 8.773l4.336-3.632q.422-.305.773.07.306.422-.07.773l-6.82 5.72q.28.538.281 1.171-.024 1.125-.773 1.852-.727.75-1.852.773-1.125-.024-1.852-.773Q.023 14 0 12.875q.024-1.125.773-1.852.727-.75 1.852-.773.961.023 1.64.586L5.86 9.5 4.266 8.164q-.68.562-1.641.586Q1.5 8.726.773 7.977.023 7.25 0 6.125.024 5 .773 4.273q.727-.75 1.852-.773m1.5 9.375q-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29' />
    </g>
    <defs>
      <clipPath id='33806285c67854d064c662761fd048e5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionBoldIcon);
export default ForwardRef;
