import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 7.688v4.375c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.437V7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M1.188 18h4.375a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.438H1.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938M13.375 7.688v3.437h3.438a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-4.375c-.547 0-.938-.39-.938-.937V7.687c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938M12.438 18h4.374a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-3.438v3.438c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-4.375c0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='ca30cfe18560f85ad761c6896d0b1cf5__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgBoldIcon);
export default ForwardRef;
