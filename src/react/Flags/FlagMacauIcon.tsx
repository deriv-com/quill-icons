import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMacauIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#0F7562'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#FBD116'
      d='M9.004 6.116 8.54 6.06l-.09-.458-.197.423-.462-.057.341.317-.196.423.408-.226.342.317-.09-.457zM11.792 3.64h-.672l.543.397-.209.643.547-.397.545.397-.209-.642.547-.397h-.676L12 3zM13.908 4.137l.381.269.373-.283-.136.45.382.269-.466.008-.136.446-.151-.441-.468.008.373-.283zM15.746 6.025l.462-.057-.341.317.196.423-.408-.226-.342.317.09-.457-.407-.226.463-.056.09-.458z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M12 10.387a2.84 2.84 0 0 1-1.841.673H8.01a5 5 0 0 1-.205-.282h2.222A2.85 2.85 0 0 0 12 9.986a2.854 2.854 0 0 0 1.972.792h2.222q-.097.144-.205.282h-2.148A2.84 2.84 0 0 1 12 10.387'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M8.14 9.518q-.165.06-.34.07a2.85 2.85 0 0 0 4.2.088 2.85 2.85 0 0 0 4.2-.088 1.1 1.1 0 0 1-.34-.07h-.005a2.85 2.85 0 0 1-2.492.757 2.86 2.86 0 0 0 2.908-1.838 3.345 3.345 0 0 0-3.44.525 3.35 3.35 0 0 1 2.415-1.036q.093-.177.24-.313A3.35 3.35 0 0 0 12.9 8.648c.353-.472.56-1.06.56-1.694a2.84 2.84 0 0 0-.37-1.408 1.15 1.15 0 0 1-.264.458 2.84 2.84 0 0 1-.323 2.964c.314-.468.482-1.02.482-1.584a2.9 2.9 0 0 0-.113-.813c-.204-.69-.64-1.138-.873-1.349-.232.211-.669.658-.873 1.349a2.9 2.9 0 0 0-.113.813c0 .564.168 1.116.482 1.584a2.84 2.84 0 0 1-.323-2.964 1.15 1.15 0 0 1-.264-.458c-.244.43-.371.915-.37 1.408 0 .634.207 1.222.56 1.694a3.34 3.34 0 0 0-2.585-1.035q.146.136.24.313a3.35 3.35 0 0 1 2.415 1.035 3.35 3.35 0 0 0-3.44-.524 2.86 2.86 0 0 0 2.908 1.838 2.845 2.845 0 0 1-2.493-.757zM8.39 11.49l-.133-.141h7.486l-.134.14zM8.704 11.782q.134.114.275.218h6.042q.141-.105.275-.218zM9.3 12.222q.245.155.506.282h4.388q.261-.128.507-.282zM10.13 12.644c.595.236 1.23.357 1.87.356.64.001 1.275-.12 1.87-.356z'
    />
    <path
      fill='#FBD116'
      d='m9.94 4.58.152-.443-.381.269-.373-.283.136.45-.382.269.466.008.136.446.151-.441.468.008z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMacauIcon);
export default ForwardRef;
