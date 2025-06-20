import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7.805c.117-.586.625-1.055 1.25-1.055h7.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.766l-.782 4.375h4.454a5.32 5.32 0 0 1 5.312 5.313 5.293 5.293 0 0 1-5.312 5.312H4.156c-1.523 0-2.93-.86-3.633-2.227l-.156-.312a1.24 1.24 0 0 1 .547-1.68 1.24 1.24 0 0 1 1.68.547l.156.313c.273.547.82.859 1.406.859h3.282a2.826 2.826 0 0 0 2.812-2.812c0-1.524-1.29-2.813-2.812-2.813H1.5a1.27 1.27 0 0 1-.977-.43C.29 15.422.172 15.031.25 14.68z' />
    </g>
    <defs>
      <clipPath id='c0b7cfa2815e83983fff79631914abb3__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgFillIcon);
export default ForwardRef;
