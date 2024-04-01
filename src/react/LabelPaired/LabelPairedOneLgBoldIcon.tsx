import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.938 7.688v14.687h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125V9.367l-2.657 1.64c-.43.274-1.015.118-1.289-.312C-.156 10.265 0 9.68.43 9.406l4.062-2.5a.9.9 0 0 1 .938-.039c.312.196.508.508.508.82' />
    </g>
    <defs>
      <clipPath id='b51597b4e4514c92ebb141c0a8e163c7__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgBoldIcon);
export default ForwardRef;
