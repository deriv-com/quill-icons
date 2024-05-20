import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={30}
    viewBox='0 0 8 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.438 8.313c0-.547.273-1.055.78-1.329.47-.273 1.055-.273 1.563 0 .469.274.782.782.782 1.329 0 .585-.313 1.093-.782 1.367-.508.273-1.093.273-1.562 0-.508-.274-.781-.782-.781-1.367m-1.563 5c0-.508.39-.938.938-.938H4a.95.95 0 0 1 .938.938v10.312h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.875V14.25h-1.25c-.547 0-.938-.39-.938-.937' />
    </g>
    <defs>
      <clipPath id='eea1a4f84424045843355486783f43a9__a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgBoldIcon);
export default ForwardRef;
