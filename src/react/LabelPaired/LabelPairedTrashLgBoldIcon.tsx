import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.164 7.375q-.156 0-.234.156l-.742 1.094h5.664l-.743-1.094q-.117-.156-.273-.156zm6.914 1.25h2.735q.858.078.937.938-.078.858-.937.937h-.47l-.937 12.695a2.45 2.45 0 0 1-.781 1.64 2.6 2.6 0 0 1-1.68.665h-7.89a2.6 2.6 0 0 1-1.68-.664 2.45 2.45 0 0 1-.781-1.64L1.656 10.5h-.468q-.86-.079-.938-.937.078-.86.938-.938h2.734l1.445-2.148q.664-.938 1.797-.977h3.672q1.132.04 1.836.977zm.39 1.875H3.532l.899 12.54q.117.546.625.585h7.89q.508-.039.625-.586z' />
    </g>
    <defs>
      <clipPath id='73b9eac61f56da4a12adc9d3f06ec1e7__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgBoldIcon);
export default ForwardRef;
