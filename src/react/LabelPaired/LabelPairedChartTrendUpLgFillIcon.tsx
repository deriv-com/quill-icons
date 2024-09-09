import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24.297 5.656c.625.313.86 1.055.547 1.68l-3.75 7.5c-.196.43-.625.664-1.094.664h-5.508l-4.648 9.336a1.24 1.24 0 0 1-1.68.547l-7.5-3.75a1.24 1.24 0 0 1-.547-1.68 1.24 1.24 0 0 1 1.68-.547l6.367 3.203 4.453-8.906c.195-.43.625-.703 1.133-.703h5.469l3.398-6.797a1.24 1.24 0 0 1 1.68-.547' />
    </g>
    <defs>
      <clipPath id='55459a56db8904d7e0e9d7efc4fd0917__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpLgFillIcon);
export default ForwardRef;
