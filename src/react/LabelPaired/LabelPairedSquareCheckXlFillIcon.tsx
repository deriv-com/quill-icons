import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.5h15q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89m12.797 8.297q.656-.797 0-1.594-.797-.655-1.594 0L9 19.406l-2.203-2.203q-.797-.655-1.594 0-.656.797 0 1.594l3 3q.797.656 1.594 0z' />
    </g>
    <defs>
      <clipPath id='9ab767d4db43659360f5b69c024dcea6__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlFillIcon);
export default ForwardRef;
