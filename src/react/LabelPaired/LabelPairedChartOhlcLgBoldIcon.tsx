import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 5.5a.95.95 0 0 1 .938.938V8H15a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.562v12.188c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V20.5H10c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h1.563V6.438c0-.508.39-.938.937-.938M20.625 8a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.562v1.563c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-7.188h-1.563c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h1.563V8.938c0-.508.39-.938.937-.938m-16.25 5a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937H5.313v1.563c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-7.188H1.875c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h1.563v-1.562c0-.508.39-.938.937-.938' />
    </g>
    <defs>
      <clipPath id='902df5baccf345dd7646141a35af30f7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcLgBoldIcon);
export default ForwardRef;
