import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownLgRegularIcon = (
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
      <path d='M12.5 24.25c.664 0 1.25-.547 1.25-1.25V13H9.375A1.85 1.85 0 0 1 7.5 11.125V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25zm-3.125-12.5h4.336c-.04-.078-.078-.195-.156-.273L9.023 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625M2.5 5.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m5.625 9.375v4.766l2.031-2.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .898L7.93 21.594a.66.66 0 0 1-.899 0l-3.125-3.125a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.07 2.07v-4.765c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='fd402c7c2fe333a8369e9b6aa5228199__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownLgRegularIcon);
export default ForwardRef;
