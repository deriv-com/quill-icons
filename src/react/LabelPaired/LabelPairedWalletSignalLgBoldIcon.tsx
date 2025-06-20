import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalLgBoldIcon = (
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
      <path d='M0 10.188A3.443 3.443 0 0 1 3.438 6.75h14.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H3.438c-.899 0-1.563.703-1.563 1.563v10.625c0 .898.664 1.562 1.563 1.562H13.75v1.875H3.438A3.42 3.42 0 0 1 0 20.813zm3.75 1.25c0-.508.39-.938.938-.938h11.875c1.875 0 3.437 1.563 3.437 3.438v1.171a12 12 0 0 0-1.875-.625v-.546c0-.86-.703-1.563-1.562-1.563H4.688c-.547 0-.938-.39-.938-.937m11.25 5c0-.508.39-.938.938-.938 5 0 9.062 4.063 9.062 9.063 0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-3.946-3.242-7.188-7.187-7.188-.547 0-.938-.39-.938-.937m0 3.75c0-.508.39-.938.938-.938a5.32 5.32 0 0 1 5.312 5.313c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-1.875-1.562-3.438-3.437-3.438-.547 0-.938-.39-.938-.937m0 4.062c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='047a4725827f112edcadd2cf060d1a59__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalLgBoldIcon);
export default ForwardRef;
