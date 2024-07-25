import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdLgFillIcon = (
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
      <path d='M2.75 6.75h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m6.445 5.547a.88.88 0 0 0-.82-.547.96.96 0 0 0-.86.547l-2.812 5.625a.925.925 0 0 0 .43 1.25.925.925 0 0 0 1.25-.43l.195-.43h3.555l.195.43c.235.469.82.664 1.25.43a.925.925 0 0 0 .43-1.25zm-.82 2.5.82 1.64h-1.68zm7.188.703a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m.937-1.68a2.7 2.7 0 0 0-.937-.195 2.826 2.826 0 0 0-2.813 2.813 2.8 2.8 0 0 0 2.813 2.812c.43 0 .82-.078 1.21-.273.157.195.391.273.665.273.507 0 .937-.39.937-.937v-5.625a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938z' />
    </g>
    <defs>
      <clipPath id='c242c364c48c4075474e6477c45effe9__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdLgFillIcon);
export default ForwardRef;
