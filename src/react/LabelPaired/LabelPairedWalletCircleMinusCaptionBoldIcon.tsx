import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWalletCircleMinusCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 6.313C0 5.188.914 4.25 2.063 4.25h8.624a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937H7.78c.14.422.375.797.657 1.125H2.061A2.05 2.05 0 0 1 0 12.687V6.314Zm2.25.75c0-.305.234-.563.563-.563h7.124c.938 0 1.735.656 1.97 1.523-.095 0-.188-.023-.282-.023-.305 0-.61.047-.89.094-.165-.258-.47-.469-.797-.469H2.811a.542.542 0 0 1-.562-.563Zm6 5.062c0-1.852 1.5-3.375 3.375-3.375A3.391 3.391 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.361 3.361 0 0 1-3.375-3.375Zm1.5 0c0 .21.164.375.375.375h3a.385.385 0 0 0 .375-.375.403.403 0 0 0-.375-.375h-3a.385.385 0 0 0-.375.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusCaptionBoldIcon);
export default ForwardRef;
