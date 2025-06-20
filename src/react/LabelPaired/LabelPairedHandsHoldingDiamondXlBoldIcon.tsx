import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.922 6.469a1.445 1.445 0 0 1 2.11 0l4.5 4.5c.609.562.609 1.547 0 2.11l-4.5 4.5c-.563.608-1.548.608-2.11 0l-4.5-4.5a1.445 1.445 0 0 1 0-2.11zM3.375 9c1.828 0 3.375 1.547 3.375 3.375v6.047c.563-.469 1.313-.797 2.11-.797.843 0 1.687.375 2.296.984l2.86 2.86c.375.375.703.75.984 1.172.234-.422.563-.797.938-1.172l2.859-2.86c.61-.609 1.453-.984 2.297-.984.843 0 1.593.328 2.156.797v-6.047c0-1.828 1.5-3.375 3.375-3.375S30 10.547 30 12.375v10.172c0 1.453-.61 2.906-1.64 3.984l-3.188 3.14c-.469.47-1.172.47-1.594 0a1.027 1.027 0 0 1 0-1.546l3.188-3.187c.609-.657.984-1.5.984-2.391V12.375a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125v6.844c0 1.218-.516 2.39-1.36 3.234l-.75.75-1.218 1.219-.75.75c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l.75-.75 1.219-1.266c.187-.187.328-.468.328-.703 0-.562-.469-.984-1.031-.984-.235 0-.516.094-.703.281l-2.86 2.86c-.937.89-1.406 2.156-1.406 3.421v2.391A1.11 1.11 0 0 1 15 30c-.656 0-1.125-.469-1.125-1.125v-2.39a4.75 4.75 0 0 0-1.453-3.422l-2.86-2.86c-.187-.187-.468-.328-.703-.328-.562 0-.984.469-.984 1.031 0 .235.094.516.281.703l1.266 1.22.75.75c.422.468.422 1.171 0 1.593-.469.469-1.172.469-1.594 0l-.75-.75-1.266-1.219-.75-.75C4.97 21.61 4.5 20.438 4.5 19.22v-6.844a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125v10.172c0 .89.328 1.734.984 2.39l3.188 3.141c.422.469.422 1.172 0 1.594-.469.469-1.172.469-1.594 0l-3.187-3.14A5.56 5.56 0 0 1 0 22.546V12.375C0 10.547 1.5 9 3.375 9' />
    </g>
    <defs>
      <clipPath id='1acb596c504ff153958a764d70cce1ee__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondXlBoldIcon);
export default ForwardRef;
