import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.172 12.422 10.594 18l5.578 5.578q.656.797 0 1.594-.797.656-1.594 0L9 19.594l-5.578 5.578q-.797.656-1.594 0-.656-.797 0-1.594L7.406 18l-5.578-5.578q-.655-.797 0-1.594.797-.655 1.594 0L9 16.406l5.578-5.578q.797-.655 1.594 0 .656.797 0 1.594' />
    </g>
    <defs>
      <clipPath id='ad00a0ef772679f208e6a975a6a5536f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlBoldIcon);
export default ForwardRef;
