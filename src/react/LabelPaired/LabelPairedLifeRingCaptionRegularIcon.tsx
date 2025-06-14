import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingCaptionRegularIcon = (
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
      <path d='m9.422 13.484-2.133-2.132c-.375.257-.82.398-1.289.398-.492 0-.937-.14-1.312-.398l-2.133 2.132c.914.797 2.11 1.266 3.445 1.266a5.18 5.18 0 0 0 3.422-1.266m.539-.539A5.2 5.2 0 0 0 11.25 9.5a5.2 5.2 0 0 0-1.29-3.422L7.829 8.211c.258.375.422.82.422 1.289 0 .492-.164.938-.422 1.313zm.539.54.258.257c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L9.962 14A5.93 5.93 0 0 1 6 15.5 6 6 0 0 1 2.016 14l-.258.281a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l.282-.258A6 6 0 0 1 0 9.5C0 8 .563 6.594 1.5 5.54l-.281-.259a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0L2.016 5A6.1 6.1 0 0 1 6 3.5c1.5 0 2.906.586 3.96 1.5l.259-.258c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-.258.257A6.05 6.05 0 0 1 12 9.5c0 1.523-.586 2.93-1.5 3.984M9.422 5.538A5.2 5.2 0 0 0 6 4.25a5.2 5.2 0 0 0-3.445 1.29l2.133 2.132c.375-.258.82-.422 1.312-.422.469 0 .914.164 1.29.422zm-5.274 5.274A2.3 2.3 0 0 1 3.75 9.5c0-.469.14-.914.398-1.29L2.016 6.079A5.17 5.17 0 0 0 .75 9.5c0 1.336.469 2.531 1.266 3.445zM4.5 9.5c0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313 0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29' />
    </g>
    <defs>
      <clipPath id='91f927bceca1c114b097ca51a25b7ce8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingCaptionRegularIcon);
export default ForwardRef;
