import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleLgIcon = (
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
      <path d='M12.46 16.008q-.077.234.274 1.406.352 1.211 2.11 2.188-.235.741-.82 1.835a9.3 9.3 0 0 1-1.407 1.915q-.82.82-1.758.898a3.5 3.5 0 0 1-1.406-.352q-.664-.312-1.601-.351-.976.039-1.68.39a3.7 3.7 0 0 1-1.25.313q-.976-.039-1.836-.937a9.7 9.7 0 0 1-1.484-2.032Q.976 20.11.703 19.367q-.546-1.64-.547-3.164.078-2.618 1.446-3.906 1.327-1.29 3.046-1.328.977.078 1.915.469.664.273 1.093.312.313-.039.938-.273.507-.195 1.172-.391.663-.195 1.328-.156 2.187.195 3.32 1.758-1.993 1.17-1.953 3.32m-2.226-6.406Q9.063 10.969 7.54 10.93q-.078-1.641.977-2.813a4.9 4.9 0 0 1 1.21-.937q.743-.39 1.446-.43.078.351-.04 1.094-.155.78-.898 1.758' />
    </g>
    <defs>
      <clipPath id='11545c5bb4810e01087f442d674cc06a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleLgIcon);
export default ForwardRef;
