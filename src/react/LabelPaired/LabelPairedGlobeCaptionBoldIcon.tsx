import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.375c.164 0 .633-.164 1.102-1.125.21-.422.398-.914.515-1.5H4.36c.141.586.305 1.078.516 1.5.492.96.938 1.125 1.125 1.125m-1.828-3.75h3.633q.07-.528.07-1.125 0-.562-.07-1.125H4.172c-.047.375-.047.75-.047 1.125 0 .398 0 .773.047 1.125m.187-3.375h3.258a6 6 0 0 0-.515-1.477c-.47-.96-.938-1.148-1.102-1.148-.187 0-.633.188-1.125 1.148-.21.422-.375.915-.516 1.477m4.57 1.125c.048.375.048.75.048 1.125 0 .398 0 .773-.047 1.125h1.804q.141-.528.141-1.125 0-.562-.14-1.125zm1.383-1.125a4.82 4.82 0 0 0-2.296-2.18c.328.61.586 1.36.75 2.18zm-7.101 0c.164-.82.422-1.57.75-2.18a4.82 4.82 0 0 0-2.297 2.18zM1.242 8.375c-.07.375-.117.75-.117 1.125 0 .398.023.773.117 1.125h1.805C3 10.273 3 9.898 3 9.5c0-.375 0-.75.047-1.125zm6.774 5.578a4.76 4.76 0 0 0 2.297-2.203H8.766c-.164.844-.422 1.594-.75 2.203m-4.055 0c-.328-.61-.586-1.36-.75-2.203H1.664a4.76 4.76 0 0 0 2.297 2.203M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3' />
    </g>
    <defs>
      <clipPath id='591ab8b33755ed788c29e950355d0d73__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeCaptionBoldIcon);
export default ForwardRef;
