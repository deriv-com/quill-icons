import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCircleMinusCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.313C0 5.188.914 4.25 2.063 4.25h8.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937H7.78c.14.422.375.797.657 1.125H2.061A2.05 2.05 0 0 1 0 12.688zm2.25.75c0-.305.234-.563.563-.563h7.124c.938 0 1.735.656 1.97 1.523-.095 0-.188-.023-.282-.023-.305 0-.61.047-.89.094-.165-.258-.47-.469-.797-.469H2.811a.54.54 0 0 1-.562-.562m6 5.062c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m1.5 0c0 .21.164.375.375.375h3a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-3a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='4bb2efdd5e1ee3b7877a6bc3fed5a061__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusCaptionBoldIcon);
export default ForwardRef;
