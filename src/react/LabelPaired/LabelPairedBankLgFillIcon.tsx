import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.492 5.617a1.4 1.4 0 0 1 .977 0l8.75 3.75c.547.235.86.82.742 1.406a1.216 1.216 0 0 1-1.211.977v.313c0 .546-.43.937-.937.937H2.188c-.547 0-.938-.39-.938-.937v-.313c-.625 0-1.133-.39-1.25-.977a1.26 1.26 0 0 1 .742-1.406zM5 14.25v7.5h1.563v-7.5h2.5v7.5h1.874v-7.5h2.5v7.5H15v-7.5h2.46v7.695c.04 0 .08 0 .08.04l1.874 1.25c.469.312.664.859.508 1.406a1.22 1.22 0 0 1-1.172.859H1.25c-.586 0-1.055-.352-1.21-.86a1.24 1.24 0 0 1 .507-1.406l1.875-1.25c0-.039.039-.039.078-.039V14.25zM10 8c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25C11.25 8.586 10.664 8 10 8' />
    </g>
    <defs>
      <clipPath id='4566692fe00d1d944c8f279a50877bb5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankLgFillIcon);
export default ForwardRef;
