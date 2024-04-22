import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m.781-14.766c0-.468-.351-.859-.82-.859s-.86.39-.86.86v.624c-.234.079-.468.118-.664.235-.703.312-1.367.86-1.523 1.719-.156.898.195 1.718.977 2.187.547.352 1.289.586 1.875.742.078.04.195.04.273.078.469.117.938.274 1.328.508.469.313.274.899-.195 1.094-.352.117-.899.195-1.563.078-.468-.078-.898-.234-1.328-.352-.117-.039-.195-.078-.312-.117-.43-.156-.899.078-1.055.547a.83.83 0 0 0 .508 1.055c.586.195 1.133.351 1.68.508v.664c0 .468.39.86.859.86s.82-.392.82-.86v-.586c.352-.04.703-.117 1.016-.235.703-.312 1.328-.898 1.484-1.757.156-.899-.195-1.758-.937-2.266-.586-.39-1.367-.625-1.992-.82-.079 0-.157-.04-.274-.04-.43-.156-.898-.273-1.289-.507-.469-.313-.117-.781.313-.938.468-.234 1.054-.273 1.601-.156.274.04.547.117.82.195.04 0 .118.04.157.04.468.117.937-.118 1.054-.587.118-.43-.156-.898-.586-1.054-.078 0-.156-.04-.234-.04-.351-.117-.742-.234-1.133-.273z' />
    </g>
    <defs>
      <clipPath id='8469e7e4437f5d6e99d789e8bc10a44c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarLgFillIcon);
export default ForwardRef;
