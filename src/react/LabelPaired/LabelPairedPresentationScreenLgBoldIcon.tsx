import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 5.5h20.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938M1.5 8.625h1.875v8.438c0 .195.117.312.313.312h15.625a.31.31 0 0 0 .312-.312V8.625H21.5v8.438c0 1.21-1.016 2.187-2.187 2.187h-6.915v1.836l2.852 2.852c.39.351.39.937 0 1.289-.352.39-.937.39-1.328 0l-2.461-2.461L9 25.226a.856.856 0 0 1-1.29 0 .856.856 0 0 1 0-1.288l2.853-2.852V19.25H3.686A2.184 2.184 0 0 1 1.5 17.063z' />
    </g>
    <defs>
      <clipPath id='809b810d4184d4a23477f893b2a20f58__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgBoldIcon);
export default ForwardRef;
