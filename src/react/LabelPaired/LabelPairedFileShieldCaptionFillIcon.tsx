import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5c0-.82.656-1.5 1.5-1.5H5.5v3c0 .422.328.75.75.75h3v1.102l-2.18.89c-.515.188-.82.68-.82 1.219 0 1.312.422 3.469 2.203 4.875-.21.117-.469.164-.703.164h-6A1.48 1.48 0 0 1 .25 14zm9 1.5h-3v-3zm.914 2.297a.58.58 0 0 1 .399 0l2.812 1.125a.57.57 0 0 1 .375.515c0 1.5-.61 3.961-3.164 5.04a.72.72 0 0 1-.445 0C7.586 14.398 7 11.937 7 10.437c0-.21.14-.421.352-.515zm2.438 2.015-2.227-.89v4.406c1.594-.773 2.133-2.32 2.227-3.515' />
    </g>
    <defs>
      <clipPath id='a8ab7388329f81c4f4a17d23cf1434e0__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionFillIcon);
export default ForwardRef;
