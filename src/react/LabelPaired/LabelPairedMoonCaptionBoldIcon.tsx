import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.398 5.82a4.05 4.05 0 0 0-1.64 1.477A4.26 4.26 0 0 0 1.125 9.5q.047 1.758 1.195 2.906 1.172 1.172 2.907 1.219.468 0 .914-.094a5.2 5.2 0 0 1-2.532-1.898q-.96-1.313-.984-3.07 0-1.524.773-2.743m1.454-1.547a.7.7 0 0 0 .164-.023h.422q.117 0 .234.023.281.047.351.282.048.28-.187.422a1 1 0 0 0-.234.14 3 3 0 0 0-.282.211h-.023l-.047.047q-.703.586-1.102 1.406a4 4 0 0 0-.398 1.782q.047 1.757 1.195 2.906 1.149 1.171 2.907 1.219h.093q.187 0 .352-.024a1.6 1.6 0 0 1 .258-.023q.28-.048.398.187t-.07.445a2 2 0 0 0-.188.165q-.14.14-.328.257l-.047.047a.3.3 0 0 1-.07.047q-1.312.937-3 .961-1.476-.024-2.648-.727a4.9 4.9 0 0 1-1.875-1.875Q.023 10.977 0 9.5q.047-2.133 1.406-3.586 1.36-1.454 3.446-1.64' />
    </g>
    <defs>
      <clipPath id='8f50f8d40e386d46536bdf581330eaf1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionBoldIcon);
export default ForwardRef;
