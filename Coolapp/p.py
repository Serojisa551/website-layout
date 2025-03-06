# class A ():
#     def f(self):
#         print("dssadaf")
        
# class B(A):
#     def __init__(self, i, p=None):
#         self.i = i
#         self.p = p

# g=B("5" , 8)
# print(g.p)


def foo(srting:str):
    if type(srting) != str:
        raise TypeError("djfdsjksbfgkewjb")
    else:
        print(type(srting))
    
foo(
    8
)    

