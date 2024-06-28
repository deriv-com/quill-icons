import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownLgRegularIcon = (
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
      <path d='M11.25 22.336a.98.98 0 0 0 1.172.664.98.98 0 0 0 .664-1.172l-.195-.625a7.2 7.2 0 0 0-.977-2.226.6.6 0 0 1 0-.625.59.59 0 0 1 .547-.352H17.5c.664 0 1.25-.547 1.25-1.25 0-.43-.234-.82-.586-1.055-.273-.156-.39-.547-.234-.82.117-.195.195-.39.195-.625 0-.469-.273-.898-.703-1.094a.6.6 0 0 1-.313-.43.6.6 0 0 1 .118-.507c.156-.235.273-.469.273-.781 0-.547-.39-1.016-.86-1.172-.312-.118-.507-.43-.43-.743 0-.078.04-.156.04-.273C16.25 8.586 15.664 8 15 8h-3.516c-.625 0-1.21.195-1.718.547L8.242 9.562a3 3 0 0 0-.86.86c-.194.312-.585.39-.859.195-.312-.195-.39-.586-.195-.86a4.1 4.1 0 0 1 1.211-1.25l1.524-1.015a4.4 4.4 0 0 1 2.421-.742H15c1.367 0 2.5 1.133 2.5 2.5v.04c.742.429 1.25 1.25 1.25 2.148 0 .351-.078.703-.195.976.468.469.82 1.133.82 1.836 0 .273-.04.508-.117.742.43.469.742 1.094.742 1.758 0 1.406-1.133 2.5-2.5 2.5h-3.984c.234.547.43 1.055.586 1.602l.195.664c.312 1.172-.39 2.343-1.563 2.695-1.171.312-2.343-.39-2.695-1.563l-.156-.625a5.35 5.35 0 0 0-2.266-3.085l-.117-.079.313-.507-.313.507a4.5 4.5 0 0 1-1.172-1.093.665.665 0 0 1 .156-.899.624.624 0 0 1 .86.156c.234.313.508.586.82.782l.117.078a6.55 6.55 0 0 1 2.813 3.789zm-10-3.086h2.5V10.5h-2.5zm-1.25 0V10.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25h-2.5C.547 20.5 0 19.953 0 19.25' />
    </g>
    <defs>
      <clipPath id='67bdfe4ae11f52b571ff299dc1677112__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownLgRegularIcon);
export default ForwardRef;
