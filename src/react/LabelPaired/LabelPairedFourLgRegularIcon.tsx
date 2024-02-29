import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.797 7.648 1.64 18h9.609v-6.875q.039-.585.625-.625.585.039.625.625V18h1.875q.585.039.625.625-.039.585-.625.625H12.5v4.375q-.039.585-.625.625-.585-.039-.625-.625V19.25H.625a.63.63 0 0 1-.547-.273.66.66 0 0 1 0-.625l5.625-11.25q.274-.508.82-.274.508.313.274.82' />
    </g>
    <defs>
      <clipPath id='6a81eb9bb4e071fde1a9501c6636ebfb__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgRegularIcon);
export default ForwardRef;
