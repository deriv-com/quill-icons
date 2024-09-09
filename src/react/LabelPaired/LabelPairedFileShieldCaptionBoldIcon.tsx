import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldCaptionBoldIcon = (
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
      <path d='M1.75 14.375h5.766c.257.352.562.68.937.96-.21.118-.469.165-.703.165h-6A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055v1.219l-1.125.468V7.25H6.25a.74.74 0 0 1-.75-.75V4.625H1.75A.385.385 0 0 0 1.375 5v9c0 .21.164.375.375.375m8.414-5.578a.58.58 0 0 1 .399 0l2.812 1.125a.57.57 0 0 1 .375.515c0 1.5-.61 3.961-3.164 5.04a.72.72 0 0 1-.445 0C7.586 14.398 7 11.937 7 10.437c0-.21.14-.421.352-.515zm2.438 2.015-2.227-.89v4.406c1.594-.773 2.133-2.32 2.227-3.515' />
    </g>
    <defs>
      <clipPath id='3f8c93ade3659a6e854a9e9b14565738__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionBoldIcon);
export default ForwardRef;
