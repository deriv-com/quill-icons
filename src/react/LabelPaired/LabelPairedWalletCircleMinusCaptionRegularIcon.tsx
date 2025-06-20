import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCircleMinusCaptionRegularIcon = (
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
      <path d='M0 6.125C0 5.094.82 4.25 1.875 4.25h9c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9C1.242 5 .75 5.516.75 6.125v6.75A1.11 1.11 0 0 0 1.875 14h6.07c.14.281.305.54.492.75H1.875A1.85 1.85 0 0 1 0 12.875zm2.25 0c0-.187.164-.375.375-.375h7.5A1.88 1.88 0 0 1 12 7.625v.398c-.14 0-.258-.023-.375-.023-.14 0-.258.023-.375.023v-.398A1.14 1.14 0 0 0 10.125 6.5h-7.5a.37.37 0 0 1-.375-.375m6 6c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m.75 0a2.62 2.62 0 0 0 2.625 2.625 2.636 2.636 0 0 0 2.625-2.625c0-1.43-1.195-2.625-2.625-2.625A2.636 2.636 0 0 0 9 12.125m.75 0c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='5f31fec61260ca79773e059e8eb1a058__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusCaptionRegularIcon);
export default ForwardRef;
