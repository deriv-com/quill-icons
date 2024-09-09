import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.398 4.25a.37.37 0 0 0-.304.188L3.719 5h3.539l-.375-.562a.37.37 0 0 0-.305-.188zM8.125 5h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H9.93l-.586 8.367a1.49 1.49 0 0 1-1.5 1.383H3.133c-.774 0-1.43-.586-1.5-1.383L1.047 5.75H.625a.37.37 0 0 1-.375-.375C.25 5.188.414 5 .625 5h2.227l.609-.96c.187-.33.562-.54.937-.54h2.18c.375 0 .75.21.961.54zm1.055.75H1.797l.586 8.32c.023.375.351.68.75.68h4.71a.744.744 0 0 0 .75-.68z' />
    </g>
    <defs>
      <clipPath id='e7bb613511ae7d56dc641d4aa5214383__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionRegularIcon);
export default ForwardRef;
