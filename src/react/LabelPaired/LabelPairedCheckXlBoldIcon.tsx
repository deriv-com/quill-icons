import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckXlBoldIcon = (
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
      <path d='M20.672 10.828q.656.797 0 1.594L8.297 24.797q-.797.656-1.594 0L.328 18.422q-.655-.797 0-1.594.797-.655 1.594 0L7.5 22.406l11.578-11.578q.797-.655 1.594 0' />
    </g>
    <defs>
      <clipPath id='03c683601a1a837d57fbc563ecb0f089__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlBoldIcon);
export default ForwardRef;
