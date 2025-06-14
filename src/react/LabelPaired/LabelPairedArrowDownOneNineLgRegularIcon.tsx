import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.75 7.375V13H19c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25V8.273l-1.055.352c-.351.078-.703-.078-.82-.39-.078-.352.078-.704.43-.82l1.875-.626a.7.7 0 0 1 .547.117c.156.117.273.274.273.508zM6.93 24.094a.66.66 0 0 1-.899 0l-3.75-3.75a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.695 2.696V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v14.766l2.656-2.696a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899zm10.039-7.344c-.742 0-1.407.39-1.797 1.016-.352.664-.352 1.406 0 2.03.39.665 1.055 1.017 1.797 1.017.703 0 1.367-.352 1.758-1.016.351-.625.351-1.367 0-2.031-.391-.625-1.055-1.016-1.758-1.016m-3.282 2.031A3.276 3.276 0 0 1 16.97 15.5a3.3 3.3 0 0 1 3.281 3.281c0 .078 0 .117-.04.157h.04c0 .859-.312 1.64-.86 2.265l-2.421 2.852c-.235.273-.625.273-.899.078-.273-.235-.273-.625-.078-.899l1.016-1.172h-.04a3.25 3.25 0 0 1-3.28-3.28' />
    </g>
    <defs>
      <clipPath id='459a19ce998ab620b231a60fe03d2e12__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineLgRegularIcon);
export default ForwardRef;
