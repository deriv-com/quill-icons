import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.938 6.75h13.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H.938C.39 8.625 0 8.235 0 7.688c0-.508.39-.938.938-.938m7.226 5.313 5 5.312c.352.39.352.977-.039 1.328s-.977.352-1.328-.039l-3.36-3.594v8.242c0 .547-.43.938-.937.938-.547 0-.937-.39-.937-.937V15.07l-3.399 3.594c-.352.39-.937.39-1.328.04-.39-.352-.39-.938-.04-1.329l5-5.312c.196-.196.43-.313.704-.313.234 0 .508.117.664.313' />
    </g>
    <defs>
      <clipPath id='71b4a0067a0cce4c86cbe24a0e43c045__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgBoldIcon);
export default ForwardRef;
