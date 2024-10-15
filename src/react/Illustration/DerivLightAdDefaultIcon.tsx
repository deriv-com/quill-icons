import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightAdDefaultIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M78.705 20.684v82.793c0 1.379-.447 2.64-1.2 3.663a6.2 6.2 0 0 1-3.883 2.426h-.001a6.2 6.2 0 0 1-1.8.057l-49.428-4.017a6.83 6.83 0 0 1-6.055-6.785v-85.06c0-2.978 2.27-5.375 5.103-5.669h.012q.592-.061 1.21.005l6.934.77 5.155.574 36.08 2.44a8.853 8.853 0 0 1 7.875 8.8z'
    />
    <path
      fill='#000'
      d='M72.53 110q-.374 0-.75-.042l-49.427-4.017A7.16 7.16 0 0 1 16 98.821v-85.06a6.016 6.016 0 0 1 6.698-5.997l48.168 3.784a9.18 9.18 0 0 1 8.174 9.134v82.794a6.45 6.45 0 0 1-1.266 3.86 6.5 6.5 0 0 1-4.095 2.558q-.008 0-.015.002a6.5 6.5 0 0 1-1.136.101zM21.492 8.425s-.015.002-.018.004a5.346 5.346 0 0 0-4.802 5.333v85.06a6.487 6.487 0 0 0 5.755 6.451l49.429 4.017a5.8 5.8 0 0 0 1.701-.054l.015-.001a5.82 5.82 0 0 0 3.66-2.294 5.8 5.8 0 0 0 1.134-3.462V20.685a8.507 8.507 0 0 0-7.575-8.465L22.624 8.437a5.5 5.5 0 0 0-1.132-.008z'
    />
    <path
      fill='#EBECEE'
      d='M88.651 18.952v82.793a6.185 6.185 0 0 1-5.84 6.177v.011l-9.192 1.632a6.2 6.2 0 0 0 3.882-2.427 6.14 6.14 0 0 0 1.2-3.662V20.682a8.85 8.85 0 0 0-7.874-8.8l-36.08-2.44-5.155-.573-6.933-.77a6 6 0 0 0-1.211-.008l11.804-1.655h.002a5.8 5.8 0 0 1 1.707-.067l45.814 3.782a8.854 8.854 0 0 1 7.875 8.799z'
    />
    <path
      fill='#000'
      d='M73.62 109.903a.336.336 0 0 1-.059-.668 5.83 5.83 0 0 0 3.672-2.295 5.8 5.8 0 0 0 1.136-3.463V20.684a8.507 8.507 0 0 0-7.576-8.465L22.625 8.435a5.5 5.5 0 0 0-1.142-.006.338.338 0 0 1-.079-.67l11.802-1.654A6 6 0 0 1 35 6.038l45.815 3.781a9.183 9.183 0 0 1 8.173 9.134v82.794a6.52 6.52 0 0 1-6.068 6.508.3.3 0 0 1-.057.013l-9.195 1.631zM24.653 7.981l46.213 3.567a9.18 9.18 0 0 1 8.174 9.134v82.794a6.45 6.45 0 0 1-1.267 3.86 6.5 6.5 0 0 1-1.57 1.522l6.484-1.249a.3.3 0 0 1 .106-.025 5.843 5.843 0 0 0 5.52-5.842V18.948a8.51 8.51 0 0 0-7.577-8.465L34.922 6.702a5.4 5.4 0 0 0-1.606.062l-.03.005-8.637 1.21z'
    />
    <g stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={0.706}>
      <path d='m24.25 64.895 45.198 3.623M24.376 74.664l45.198 3.623M24.504 84.432l45.197 3.623M24.63 94.2l45.197 3.623' />
    </g>
    <path
      fill='#000'
      fillRule='evenodd'
      d='M35.996 20.817a.4.4 0 0 1 .375.279l7.443 23.512a.4.4 0 1 1-.763.242l-2.495-7.883-9.44-.72-2.508 7.061a.4.4 0 1 1-.754-.268l2.61-7.347 5.148-14.61a.4.4 0 0 1 .384-.266m-4.604 14.65 8.904.678-4.327-13.667zm16.72-14.075a.4.4 0 0 1 .3-.11l7.96.426a9.4 9.4 0 0 1 8.896 9.243l.102 6.638c.076 4.99-4.189 8.946-9.159 8.494l-7.5-.68a.4.4 0 0 1-.364-.393l-.357-23.323a.4.4 0 0 1 .123-.295m.685.71.345 22.536 7.141.649c4.497.408 8.356-3.171 8.287-7.685l-.102-6.639a8.6 8.6 0 0 0-8.138-8.456z'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='m103.126 108.373-6.725 11.409c-.553.507-1.72 1.432-3.434 1.744-1.405.255-2.514-.02-3.523-.27a11.7 11.7 0 0 1-3.737-1.675 12.2 12.2 0 0 1-3.665-3.943l-3.436-6.533q3.275-5.459 6.546-10.916l3.525 6.648c.784 1.291 2.04 2.874 3.994 4.085.91.564 4.661 2.89 8.058 1.383.444-.198 1.643-.73 2.399-1.93z'
    />
    <path
      fill='#000'
      d='M91.843 122c-.943 0-1.75-.2-2.486-.383a12.2 12.2 0 0 1-3.857-1.729 12.6 12.6 0 0 1-3.778-4.063c-1.153-2.191-2.3-4.369-3.443-6.546a.37.37 0 0 1 .01-.362l6.547-10.918a.36.36 0 0 1 .327-.18.37.37 0 0 1 .316.197l3.52 6.639c1.007 1.656 2.308 2.986 3.866 3.953 3.715 2.304 6.245 2.01 7.712 1.359.422-.187 1.54-.684 2.235-1.79a.367.367 0 0 1 .504-.118c.172.105.23.329.126.503l-6.725 11.409a.4.4 0 0 1-.069.085c-.728.67-1.948 1.531-3.619 1.837a7 7 0 0 1-1.19.107zm-12.814-12.883 3.338 6.348a11.8 11.8 0 0 0 3.545 3.809 11.5 11.5 0 0 0 3.619 1.624c1.005.249 2.042.506 3.367.264 1.468-.268 2.549-1.019 3.21-1.616l5.447-9.24c-.283.157-.523.264-.678.334-1.63.725-4.412 1.067-8.402-1.405-1.662-1.03-3.046-2.447-4.116-4.207l-.011-.018-3.218-6.07-6.103 10.177z'
    />
    <path
      fill='#FF444F'
      d='m113.678 95.218-6.487 10.884-3.451.433c.122-1.37-.444-2.482-.58-2.741l-3.686-7.097 14.206-1.48z'
    />
    <path
      fill='#000'
      d='M103.739 106.907a.37.37 0 0 1-.367-.403c.105-1.176-.342-2.164-.54-2.534q-1.526-2.937-3.05-5.873l-.637-1.227a.37.37 0 0 1 .288-.538l14.205-1.48a.367.367 0 0 1 .355.557l-6.487 10.884a.37.37 0 0 1-.272.178l-3.45.432-.046.004zm-3.687-9.897.387.745 3.047 5.87c.202.377.631 1.322.64 2.489l2.84-.357q3.011-5.049 6.018-10.097l-12.932 1.348z'
    />
    <path
      fill='#FF444F'
      d='m74.899 64.37-.582 5.113-.076.664-.057.494-.056.493q-.058.516-.118 1.032l-.092.814q-.033.278-.065.562l-.168 1.47a303 303 0 0 0-.178 1.559l-2.63 23.074q-3.256 5.425-6.507 10.851l3.938-35.229c4.013-6.635 6.591-10.897 6.593-10.897z'
    />
    <path
      fill='#000'
      d='M64.37 110.868a.372.372 0 0 1-.368-.412l3.939-35.23a.36.36 0 0 1 .051-.149l5.745-9.497q.911-1.507 1.027-1.554a.37.37 0 0 1 .505.387l-.606 5.309-.054.466-.298 2.6q-.012.12-.027.236-.031.275-.065.559l-.031.272q-.07.6-.137 1.2l-2.808 24.633a.35.35 0 0 1-.05.148l-.25.42-6.257 10.431a.37.37 0 0 1-.316.179zm4.297-35.477-3.74 33.461 5.383-8.976.21-.35 2.799-24.554.137-1.2.031-.27q.031-.285.065-.563l.026-.23.297-2.603q.025-.236.054-.467l.414-3.629-2.336 3.862z'
    />
    <path
      fill='#FF444F'
      d='m85.15 98.188-6.545 10.915-14.235 1.393 6.507-10.851q7.136-.73 14.274-1.457'
    />
    <path
      fill='#000'
      d='M64.369 110.868a.37.37 0 0 1-.312-.172.37.37 0 0 1-.004-.389l6.256-10.43.251-.42c.06-.1.163-.167.28-.178l14.273-1.457a.37.37 0 0 1 .35.17.37.37 0 0 1 .005.388l-6.546 10.918a.37.37 0 0 1-.281.177l-14.235 1.393h-.037m6.73-10.873-.158.26-5.879 9.803 13.318-1.302 6.072-10.124-13.356 1.363z'
    />
    <path
      fill='#FF7E88'
      d='M103.159 103.796c.139.259.703 1.37.581 2.741a4.1 4.1 0 0 1-.61 1.827q-.001.006-.006.011c-.756 1.2-1.953 1.732-2.399 1.93-3.397 1.507-7.147-.819-8.058-1.383-1.954-1.211-3.21-2.794-3.994-4.085l-3.525-6.648q-7.137.729-14.273 1.458l2.63-23.074.072-.635.105-.924q.086-.735.168-1.47.035-.281.065-.563.015-.138.032-.273.031-.27.06-.54.059-.516.119-1.032l.055-.494q.03-.246.058-.494l.075-.663.583-5.113 38.78 30.848-14.205 1.479 3.685 7.097z'
    />
    <path
      fill='#000'
      d='M98.279 111.173c-1.523 0-3.455-.479-5.805-1.936-1.662-1.03-3.046-2.447-4.117-4.207l-.01-.019-3.409-6.427-14.026 1.431a.38.38 0 0 1-.3-.107.37.37 0 0 1-.104-.302l2.63-23.074.055-.48.122-1.079.137-1.2.039-.347.055-.485q.014-.12.026-.233l.004-.04q.033-.274.062-.54l.89-7.797a.37.37 0 0 1 .596-.248l38.781 30.849a.371.371 0 0 1-.19.658l-13.666 1.424.387.745q1.522 2.935 3.047 5.867c.229.429.745 1.574.623 2.946a4.5 4.5 0 0 1-.242 1.115c-.107.305-.25.599-.421.871l-.01.015c-.815 1.296-2.083 1.86-2.561 2.071a6.3 6.3 0 0 1-2.597.531zm-9.282-6.518c1.007 1.656 2.308 2.986 3.866 3.953 3.715 2.304 6.246 2.01 7.713 1.359.421-.186 1.538-.682 2.233-1.786q.003-.008.007-.013.217-.342.351-.727c.107-.301.176-.615.202-.934.105-1.176-.342-2.165-.54-2.535v-.003l-3.048-5.87-.637-1.228a.37.37 0 0 1 .288-.538l13.305-1.387c-12.518-9.956-25.032-19.912-37.55-29.87l-.813 7.133-.061.54-.004.039q-.012.12-.027.236-.026.24-.056.485l-.039.346-.136 1.2-.122 1.076-.056.483-2.578 22.617L85.11 97.82a.37.37 0 0 1 .364.194l3.52 6.639z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightAdDefaultIcon);
export default ForwardRef;