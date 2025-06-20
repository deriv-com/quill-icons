import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckCaptionRegularIcon = (
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
      <path d='M4.453 5.188a.38.38 0 0 1-.445.187 1.72 1.72 0 0 0-1.735.422 1.72 1.72 0 0 0-.421 1.734.38.38 0 0 1-.188.446C1.102 8.257.75 8.844.75 9.5c0 .68.352 1.242.914 1.547a.38.38 0 0 1 .188.445 1.72 1.72 0 0 0 .421 1.735 1.72 1.72 0 0 0 1.735.421c.187-.046.375.024.445.188A1.72 1.72 0 0 0 6 14.75c.656 0 1.242-.352 1.523-.914a.39.39 0 0 1 .446-.188 1.72 1.72 0 0 0 1.734-.421 1.72 1.72 0 0 0 .422-1.735c-.047-.187.023-.375.188-.445.562-.305.937-.867.937-1.547 0-.656-.375-1.242-.937-1.523a.39.39 0 0 1-.188-.446 1.72 1.72 0 0 0-.422-1.734 1.72 1.72 0 0 0-1.734-.422.38.38 0 0 1-.446-.187A1.7 1.7 0 0 0 6 4.25c-.68 0-1.242.375-1.547.938M6 3.5c.844 0 1.594.445 2.04 1.078a2.53 2.53 0 0 1 2.202.68c.586.61.82 1.43.68 2.203C11.555 7.906 12 8.656 12 9.5c0 .867-.445 1.594-1.078 2.063a2.46 2.46 0 0 1-.68 2.18c-.61.609-1.43.843-2.203.702A2.5 2.5 0 0 1 6 15.5c-.867 0-1.594-.422-2.062-1.055a2.41 2.41 0 0 1-2.18-.703 2.41 2.41 0 0 1-.703-2.18C.422 11.095 0 10.368 0 9.5c0-.844.422-1.594 1.055-2.04a2.47 2.47 0 0 1 .703-2.202 2.46 2.46 0 0 1 2.18-.68C4.406 3.945 5.133 3.5 6 3.5m2.508 4.781-3 3a.397.397 0 0 1-.54 0l-1.5-1.5a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l1.242 1.242 2.719-2.742c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='99a1eb3bede589a14885246cfd18bfd9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckCaptionRegularIcon);
export default ForwardRef;
